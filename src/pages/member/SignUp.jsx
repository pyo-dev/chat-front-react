import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { SignUpAc } from '@/utils/auth';
import { LayoutDesign } from "@/layout/LayoutDesign";
import { PyoButton } from "@/components/PyoButton";

export const SignUp = () => {
	const navigate = useNavigate();

	const [userEmail, setUserEmail] = useState("");
	const [userId, setUserId] = useState("");
	const [userName, setUserName] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const handleSignUp = () => {
		let userData = {
			email: userEmail,
			id: userId,
			name: userName,
			password: userPassword,
		};
		SignUpAc({userData, navigate});
	}

	return (
		<LayoutDesign>
			<div className="py-[30px] text-center text-white">
				<div className="text-[30px] tracking-[0.5rem]">Sign Up</div>
				<div className="text-[12px] opacity-50">Create an aaccount</div>
			</div>
			<div className="flex flex-col gap-[10px] mt-[20px]">
				<input
					type="text"
					placeholder="NAME"
					className="w-full px-6 py-4 rounded-[10px] border border-[#8864d0] bg-transparent outline-none text-white transition-all duration-300 focus:rounded-none focus:border-[#ff7391]"
					onChange={(e) => {
						setUserName(e.target.value);
					}}
				/>
				<input
					type="text"
					placeholder="E-mail"
					className="w-full px-6 py-4 rounded-[10px] border border-[#8864d0] bg-transparent outline-none text-white transition-all duration-300 focus:rounded-none focus:border-[#ff7391]"
					onChange={(e) => {
						setUserEmail(e.target.value);
					}}
				/>
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
				<PyoButton pyoType="line" to="/login">
					Login
				</PyoButton>
				<PyoButton pyoEvent={handleSignUp}>Sign Up</PyoButton>
			</div>
		</LayoutDesign>
	);
};
