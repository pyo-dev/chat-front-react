import { useRecoilState } from 'recoil';
import { PYO_USER_INFO } from '@/store/storeUserInfo';
import { PyoAxios } from '@/axios/PyoAxios';

const HOOK_PYO_USER_INFO = () => {
	const [getUserInfo, updateUserInfo] = useRecoilState(PYO_USER_INFO);

	const setUserInfo = async (id) => {

		// if(id === 'reset'){
		// 	updateUserInfo();
		// 	return false;
		// }

		await PyoAxios.get('getUserInfo.php')
		.then((response) => {
			if(response.data.success){
				updateUserInfo((prevPyoPop) => ({
					...prevPyoPop,
					...response.data.data
				}));
			} else {
				alert(response.data.message);
			}
		})
		.catch((err) => {
			console.error('API 오류:', err);
		});
	};

	return {
		getUserInfo,
		setUserInfo,
	};
};

export default HOOK_PYO_USER_INFO;