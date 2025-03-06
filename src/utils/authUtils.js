import { PyoAxios } from '@/axios/PyoAxios';

export const LoginAc = async ({userData, navigate}) => {

	if (!userData.id.trim()) {
		alert("아이디를 입력해 주세요");
		return false;
	}
	if (!userData.password.trim()) {
		alert("비밀번호를 입력해 주세요");
		return false;
	}

	await PyoAxios.post('signIn.php', userData)
	.then((response) => {
		if(response.data.success){
			localStorage.setItem('access_token', response.data.access_token);
			navigate('/');
		} else {
			alert(response.data.message);
		}
	})
	.catch((err) => {
		console.error('API 오류:', err);
	});
}

export const SignUpAc = async ({userData, navigate}) => {

	if (!userData.email.trim()) {
		alert("이메일을 입력해 주세요");
		return false;
	}
	if (!userData.id.trim()) {
		alert("아이디를 입력해 주세요");
		return false;
	}
	if (!userData.name.trim()) {
		alert("이름을 입력해 주세요");
		return false;
	}
	if (!userData.password.trim()) {
		alert("비밀번호를 입력해 주세요");
		return false;
	}

	await PyoAxios.post('signUp.php', userData)
	.then((response) => {
		if(response.data.success){
			navigate('/login');
		} else {
			alert(response.data.message);
		}
	})
	.catch((err) => {
		console.error('API 오류:', err);
	});
};

export const LogOutAc = (navigate) => {
	localStorage.clear();
	sessionStorage.clear();
	navigate('login');
}