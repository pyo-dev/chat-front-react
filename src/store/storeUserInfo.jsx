import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'PYO_USER_INFO',
	storage: sessionStorage,
});

const PYO_USER_INFO_RESET = {}

export const PYO_USER_INFO = atom({
	key: 'PYO_USER_INFO_ATOM',
	default: {
		...PYO_USER_INFO_RESET
	},
	effects_UNSTABLE: [persistAtom],
});
