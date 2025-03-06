import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LoginAc } from '@/utils/authUtils';
import { LayoutDesign } from "@/layout/LayoutDesign";
import { PyoButton } from "@/components/PyoButton";

export const Login = () => {
	const navigate = useNavigate();

	const [userId, setUserId] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const handleLogin = () => {
		let userData = {
			id: userId,
			password: userPassword,
		};
		LoginAc({userData, navigate});
	}

	return (
		<LayoutDesign>
			<div className="py-[30px] text-center text-white">
				<div className="text-[30px] tracking-[0.5rem]">LOGIN</div>
				<div className="text-[12px] opacity-50">
					Please enter your login and password!
				</div>
			</div>
			<div className="flex flex-col gap-[10px] mt-[20px]">
				<input
					type="text"
					placeholder="ID"
					className="w-full px-6 py-4 rounded-[10px] border border-[#8864d0] bg-transparent outline-none text-white transition-all duration-300 focus:rounded-none focus:border-[#ff7391]"
					onChange={(e) => {
						setUserId(e.target.value);
					}}
				/>
				<input
					type="password"
					placeholder="PASSWORD"
					className="w-full px-6 py-4 rounded-[10px] border border-[#8864d0] bg-transparent outline-none text-white transition-all duration-300 focus:rounded-none focus:border-[#ff7391]"
					onChange={(e) => {
						setUserPassword(e.target.value);
					}}
				/>
			</div>
			<div className="mt-12 flex gap-2">
				<PyoButton pyoType="line" pyoEvent={handleLogin}>Login</PyoButton>
				<PyoButton to="/signup">Sign Up</PyoButton>
			</div>
		</LayoutDesign>
	);
};
