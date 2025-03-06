// src/utils/chatUtils.js

// 날짜 형식 변환 (YYYY-MM-DD HH:MM → HH:MM)
export const formatTime = (dateTime) => dateTime.split(" ")[1];

// 날짜별로 채팅 그룹화
export const groupChatsByDate = (chatLists) => {
	return Object.entries(
		chatLists.reduce((acc, chat) => {
			const dateKey = chat.date.split(" ")[0]; // YYYY-MM-DD 추출
			if (!acc[dateKey]) acc[dateKey] = [];
			acc[dateKey].push(chat);
			return acc;
		}, {})
	).sort(([a], [b]) => new Date(a) - new Date(b));
};

// 개행 문자 (\n) → <br> 변환
export const replaceNewlineWithBr = (text) => text.replace(/\n/g, "<br>");
