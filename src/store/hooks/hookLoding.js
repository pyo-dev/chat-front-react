import { useRecoilState } from 'recoil';
import { PYO_LODING } from '@/store/storeLoding';

const HOOK_PYO_LODING = () => {
	const [getPyoLoding, updatePyoLoding] = useRecoilState(PYO_LODING);

	const setPyoLoding = (data) => {
		updatePyoLoding((prevPyoLoding) => ({
			...prevPyoLoding,
			...data
		}));
	};

	return {
		getPyoLoding,
		setPyoLoding,
	};
};

export default HOOK_PYO_LODING;