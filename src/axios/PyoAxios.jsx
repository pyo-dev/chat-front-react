import axios from 'axios';
import { LogOutAc } from '@/utils/auth';
import { useNavigate } from 'react-router-dom';

// Axios 인스턴스 생성
const PyoAxios = axios.create({
	baseURL: 'https://crashoxsusu.cafe24.com/api/_call/',
	timeout: 6000 * 5,
});

// 기본 헤더 설정
PyoAxios.defaults.headers.post['Content-Type'] = 'application/json';
PyoAxios.defaults.headers.put['Content-Type'] = 'application/json';
PyoAxios.defaults.headers.delete['Content-Type'] = 'application/json';

// 요청 인터셉터 추가
PyoAxios.interceptors.request.use(
	(config) => {
		// 요청 전 처리 로직 (예: 로딩 시작, 인증 토큰 추가 등)
		const token = sessionStorage.getItem('access_token'); // 예시: 'authToken'이라는 키로 저장된 토큰
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`; // 토큰을 Authorization 헤더에 추가
		}
		// console.log('요청 전:', config);
		return config; // 요청을 계속 진행하려면 config를 반환
	},
	(error) => {
		// 요청 오류 처리
		console.error('요청 오류:', error);
		return Promise.reject(error);
	}
);

// 응답 인터셉터 추가
PyoAxios.interceptors.response.use(
	(response) => {
		// 응답 처리 로직 (예: 응답 데이터 가공)
		// console.log('응답 성공:', response);
		if(response.data.message === '인증 실패'){
			LogOutAc(useNavigate());
		}
		return response; // 응답 데이터를 그대로 반환
	},
	(error) => {
		// 응답 오류 처리
		console.error('응답 오류:', error);
		return Promise.reject(error);
	}
);

export { PyoAxios };
