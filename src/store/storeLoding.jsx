import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'PYO_LODING',
	// storage: sessionStorage,
});

const PYO_LODING_RESET = {
	show: false,
}

export const PYO_LODING = atom({
	key: 'PYO_LODING_ATOM',
	default: {
		reset: PYO_LODING_RESET,
		...PYO_LODING_RESET
	},
	// effects_UNSTABLE: [persistAtom],
});
