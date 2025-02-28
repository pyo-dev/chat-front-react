import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo, LogOutAc } from '@/utils/auth';
import { PyoNavButton } from '@/components/PyoNavButton';

export const Header = () => {
	const navigate = useNavigate();
	
	const [userInfo, setUserInfo] = useState({});

	const fetchUserInfo = async () => {
		const data = await getUserInfo();
		if (data) {
			setUserInfo(data);
		}
	};

	const handleLogOut = () => {
		LogOutAc(navigate);
	}

	useEffect(() => {
		fetchUserInfo();
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
				<PyoNavButton to="/" pyoClass="w-full">메인</PyoNavButton>
			</div>
			<div className="nav">
				<div className="title">채팅 리스트</div>
				<PyoNavButton to="/room/123" pyoClass="w-full">임꺽정 방</PyoNavButton>
				<PyoNavButton to="/room/56712" pyoClass='w-full'>홍길동 방</PyoNavButton>
			</div>
			<div className="nav last">
				<PyoNavButton to="/login" pyoClass="w-full">로그인</PyoNavButton>
				<PyoNavButton to="/signup" pyoClass="w-full">회원가입</PyoNavButton>
				<PyoNavButton to="/room/aaa" pyoClass="w-full" pyoEvent={handleLogOut}>로그아웃</PyoNavButton>
			</div>
		</div>
	);
};