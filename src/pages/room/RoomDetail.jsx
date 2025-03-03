import { useState } from "react";
import { useParams } from "react-router-dom";

export const RoomDetail = () => {
	const { roomNo } = useParams();
	const [chatContents, setChatContents] = useState("");

	const handleContentsInput = (e) => {
		setChatContents(e.target.value);
	};

	// 입력값 초기화 함수
	const clearChat = () => {
		setChatContents("");
	};

	// 엔터 키 입력 시 처리
	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault(); // 기본 동작(줄바꿈) 방지
			clearChat();
		}
	};

	// 입력 버튼 클릭 시 처리
	const handleSubmit = () => {
		clearChat();
	};

	return (
		<div className="pyo-room-wrap">
			<div className="pyo-panel title-wrap">Room Number : {roomNo}</div>
			<div className="pyo-panel list-wrap">
				<div className="list-inner">
					<div></div>
				</div>
			</div>
			<div className="pyo-panel input-wrap">
				<div className="flex gap-5">
					<textarea
						className="flex-1 p-3 h-[100px] rounded-md border border-gray-300 focus:border-gray-700 resize-none outline-none"
						value={chatContents}
						onChange={handleContentsInput}
						onKeyDown={handleKeyDown}
					></textarea>
					<button
						className="w-[100px] p-3 rounded-md bg-zinc-800 hover:bg-zinc-950 text-white"
						onClick={handleSubmit}
					>
						입력
					</button>
				</div>
			</div>
		</div>
	);
};
