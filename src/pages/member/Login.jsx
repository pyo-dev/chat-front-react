import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { PyoAxios } from '@/axios/PyoAxios';
import { LayoutDesign } from "@/layout/LayoutDesign";
import { PyoButton } from "@/components/PyoButton";

export const Login = () => {
	const navigate = useNavigate();

	const [userId, setUserId] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const LoginAc = async () => {
		let reqData = {
			id: userId,
			password: userPassword,
		};

	
		if (!userId.trim()) {
			alert("아이디를 입력해 주세요");
			return false;
		}
		if (!userPassword.trim()) {
			alert("비밀번호를 입력해 주세요");
			return false;
		}

		await PyoAxios.post('signIn.php', reqData)
		.then((response) => {
			if(response.data.success){
				sessionStorage.setItem('access_token', response.data.access_token);
				navigate('/');
			} else {
				alert(response.data.message);
			}
		})
		.catch((err) => {
			console.error('API 오류:', err);
		});
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
				<PyoButton lmType="line" lmEvent={() => {LoginAc()}}>Login</PyoButton>
				<PyoButton to="/signup">Sign Up</PyoButton>
			</div>
		</LayoutDesign>
	);
};
