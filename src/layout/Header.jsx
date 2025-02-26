import { useNavigate } from 'react-router-dom';
import { PyoAxios } from '@/axios/PyoAxios';
import { PyoNavButton } from '@/components/PyoNavButton';
import { useEffect } from 'react';
import { useState } from 'react';

export const Header = () => {
	const navigate = useNavigate(); // useNavigate 훅을 사용하여 리디렉션 처리

	const [userInfo, setUserInfo] = useState({});

	const getInfo = async () => {
		await PyoAxios.get('getUserInfo.php')
		.then((response) => {
			if(response.data.success){
				setUserInfo(response.data.data);
			} else {
				alert(response.data.message);
			}
		})
		.catch((err) => {
			console.error('API 오류:', err);
		});
	}

	const logOutAc = () => {
		sessionStorage.removeItem("access_token");
		navigate('login');
	}

	useEffect(() => {
		getInfo();
	}, []);

	return (
		<div className='pyo-header'>
			<div className="logo">PYO-STUDY</div>
			<div className="profile">
				<div
					className="img"
					style={{
						backgroundImage:
							"url(https://dimg.donga.com/wps/NEWS/IMAGE/2009/06/09/7132013.1.jpg)",
					}}
				></div>
				<div className="info">{userInfo.user_name}</div>
			</div>
			<div className="nav">
				<PyoNavButton to="/" lmClass="w-full">메인</PyoNavButton>
			</div>
			<div className="nav">
				<div className="title">채팅 리스트</div>
				<PyoNavButton to="/room/123" lmClass="w-full">임꺽정 방</PyoNavButton>
				<PyoNavButton to="/room/56712" lmClass='w-full'>홍길동 방</PyoNavButton>
			</div>
			<div className="nav last">
				<PyoNavButton to="/login" lmClass="w-full">로그인</PyoNavButton>
				<PyoNavButton to="/signup" lmClass="w-full">회원가입</PyoNavButton>
				<PyoNavButton to="/room/aaa" lmClass="w-full" lmEvent={() => {logOutAc()}}>로그아웃</PyoNavButton>
			</div>
		</div>
	);
};