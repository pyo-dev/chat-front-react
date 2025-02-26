import { useRoutes, Navigate, Outlet } from "react-router-dom";
import { LayoutBasic } from "@/layout/LayoutBasic";
import { NotFound } from "@/pages/notFound/NotFound";
import { Main } from "@/pages/main/Main";
import { Login } from "@/pages/member/Login";
import { SignUp } from "@/pages/member/SignUp";
import { RoomDetail } from "@/pages/room/RoomDetail";

// 인증된 사용자만 접근할 수 있는 라우트
const PrivateRoute = () => {
	const token = sessionStorage.getItem("access_token");
	return token ? <Outlet /> : <Navigate to="/login" replace />;
};

const MyRouter = () => {
	const token = sessionStorage.getItem("access_token");

	let element = useRoutes([
		{
			path: "/",
			element: <PrivateRoute />, // ✅ 보호된 라우트
			children: [
				{
					path: "/",
					element: <LayoutBasic />, // ✅ LayoutBasic을 상위 라우트로 설정
					children: [
						{
							index: true,
							element: <Main />
						},
						{
							path: "room/:roomNo",
							element: <RoomDetail />
						},
					],
				},
			],
		},
		{
			path: "login",
			element: token ? <Navigate to="/" replace /> : <Login />,
		},
		{
			path: "signup",
			element: token ? <Navigate to="/" replace /> : <SignUp />,
		},
		{
			path: "*",
			element: <NotFound />,
		},
	]);

	return element;
};

export default MyRouter;
