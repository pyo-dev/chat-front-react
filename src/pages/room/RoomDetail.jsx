import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { formatTime, groupChatsByDate, replaceNewlineWithBr } from '@/utils/chatUtils';
import HOOK_PYO_USER_INFO from '@/store/hooks/hookUserInfo';
import { PyoAxios } from '@/axios/PyoAxios';

export const RoomDetail = () => {
	const { roomNo } = useParams(); // URL 파라미터에서 방 번호를 가져옵니다.
	const [chatContents, setChatContents] = useState(""); // 채팅 내용 상태
	const [chatLists, setChatLists] = useState([]); // 채팅 리스트 상태
	const [pageNo, setPageNo] = useState(1); // 채팅 페이징 번호
	const [more, setMore] = useState(true); // 다음 페이지 유무
	const row = 10; // 채팅 목록 수
	const [isFetchingPrevChats, setIsFetchingPrevChats] = useState(false); // 이전 채팅 데이터를 가져오는 중인지 여부
	const [isComposing, setIsComposing] = useState(false); // 한글 입력 중인지 여부
	const chatListRef = useRef(null); // 채팅 리스트 DOM을 참조하는 ref
	const { getUserInfo } = HOOK_PYO_USER_INFO(); // 유저 정보


	// 채팅 데이터 불러오기 (목업 데이터)
	const getChatList = async (currentPageNo) => {
		await PyoAxios.get(`chatListGet.php?page=${currentPageNo}&row=${row}&roomNo=${roomNo}`)
		.then((response) => {
			const resData = response.data;
			if(resData.success){
				setMore(resData.pagination.more);
				setChatLists((prevChats) => [...resData.data.reverse(), ...prevChats]); // 이전 채팅 데이터를 추가
			} else {
				alert(response.data.message);
			}
		})
		.catch((err) => {
			console.error('API 오류:', err);
		});
	};

	// 이전 채팅 불러오기 (목업 데이터)
	const getChatListPrev = async () => {
		if (chatListRef.current) {
			setPageNo(prevPageNo => {
				const newPageNo = prevPageNo + 1;
				getChatList(newPageNo); // 새로운 pageNo로 채팅 목록 불러오기
				return newPageNo; // pageNo 상태 업데이트
			});

			setTimeout(() => {
				if (chatListRef.current) {
					chatListRef.current.scrollTop = 50; // 스크롤을 약간 아래로 내립니다.
				}
				setIsFetchingPrevChats(false); // 이전 채팅 로딩 완료
			}, 100);
		}
	};

	// 날짜별로 채팅 그룹화
	const groupedChats = () => groupChatsByDate(chatLists);


	// 채팅 입력 핸들링
	const handleContentsInput = (e) => {
		setChatContents(e.target.value); // 채팅 내용 상태 업데이트
	};

	// 채팅 전송
	const handleSubmit = async () => {
		if (!chatContents.trim()) return; // 공백 메시지 전송 방지
		
		const reqData = {
			roomNo: roomNo,
			id: getUserInfo.user_id,
			name: getUserInfo.user_name,
			content: replaceNewlineWithBr(chatContents)
		}

		await PyoAxios.post(`chatInsert.php`, reqData)
		.then((response) => {
			const resData = response.data;
			if(resData.success){
				setChatLists((prevChatLists) => [...prevChatLists, resData.data]); // 채팅 리스트에 새 채팅 추가
				setChatContents(""); // 입력 창 초기화
			} else {
				alert(response.data.message);
			}
		})
		.catch((err) => {
			console.error('API 오류:', err);
		});
	};

	// Enter 키 입력 처리
	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey && !isComposing) {
			e.preventDefault(); // 개행을 방지하고 전송
			handleSubmit(); // 채팅 전송
		}
	};

	// 한글 입력 시작
	const handleCompositionStart = () => {
		setIsComposing(true); // 한글 입력 시작
	};
	
	// 한글 입력 끝
	const handleCompositionEnd = () => {
		setIsComposing(false); // 한글 입력 끝
	};

	// 스크롤 이벤트 핸들링 (맨 위 감지)
	const handleScrollUp = () => {
		if (chatListRef.current?.scrollTop === 0) { // 스크롤이 맨 위에 도달했을 때
			setIsFetchingPrevChats(true); // 이전 채팅을 불러오는 상태로 변경
			getChatListPrev(); // 이전 채팅 불러오기
		}
	};

	// 채팅 추가 시 자동 스크롤
	useEffect(() => {
		if (!isFetchingPrevChats && chatListRef.current) {
			chatListRef.current.scrollTop = chatListRef.current.scrollHeight; // 채팅 리스트 끝으로 스크롤
		}
	}, [chatLists]);

	// 초기 데이터 로딩
	useEffect(() => {
		if (!more) return;
		getChatList(1); // 채팅 목록 불러오기

		// 스크롤 이벤트 핸들링 (맨 위 감지) 실행
		const chatListEl = chatListRef.current;
		if (chatListEl) chatListEl.addEventListener("scroll", handleScrollUp);

		return () => {
			if (chatListEl) chatListEl.removeEventListener("scroll", handleScrollUp); // 컴포넌트 언마운트 시 이벤트 제거
		};
	}, [more]);

	return (
		<div className="pyo-room-wrap">
			<div className="pyo-panel title-wrap">Room Number: {roomNo}</div>

			<div className="pyo-panel list-wrap">
				<div className="list-inner" ref={chatListRef}>
					{groupedChats().map(([date, chats]) => (
						<div key={date} className="chat-group">
							<div className="chat-date">{date}</div>
							{chats.map((item, index) => (
								<div key={index} className={ item.name === getUserInfo.user_name ? 'chat-item my-chat' : 'chat-item' }>
									<div className="chat-avatar"></div>
									<div className="chat-body">
										{item.name !== getUserInfo.user_name && <div className="chat-author">{item.name}</div>}
										<div className="chat-meta">
											<div className="chat-message" dangerouslySetInnerHTML={{__html: item.content}}></div>
											<div className="chat-timestamp">{formatTime(item.date)}</div>
										</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>

			{/* 채팅 입력창 */}
			<div className="pyo-panel input-wrap">
				{pageNo}
				<div className="flex gap-5">
					<textarea
						className="flex-1 p-3 h-[100px] rounded-md border border-gray-300 focus:border-gray-700 resize-none outline-none"
						value={chatContents}
						onChange={handleContentsInput} // 내용 입력 시 상태 업데이트
						onKeyDown={handleKeyDown} // Enter 키 입력 처리
						onCompositionStart={handleCompositionStart} // 한글 입력 시작 처리
						onCompositionEnd={handleCompositionEnd} // 한글 입력 끝 처리
						placeholder="메시지를 입력하세요..."
					></textarea>
					<button className="w-[100px] p-3 rounded-md bg-zinc-800 hover:bg-zinc-950 text-white" onClick={handleSubmit}>
						입력
					</button>
				</div>
			</div>
		</div>
	);
};
