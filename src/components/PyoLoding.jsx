import { useState, useEffect } from 'react';
import HOOK_PYO_LODING from '@/store/hooks/hookLoding';

const PyoLoding = () => {
	const { getPyoLoding } = HOOK_PYO_LODING();
	const [show, setShow] = useState(false);
	const [showClass, setShowClass] = useState(false);

	useEffect(() => {
		let setTimeId;
		if (!getPyoLoding.show) {
			setShowClass('');
			setTimeId = setTimeout(() => {
				setShow(false);
			}, 300);
		} else {
			setShow(true);
			setShowClass('show');
		}

		return () => {
			if (setTimeId) {
				clearTimeout(setTimeId);
			}
		};
	}, [getPyoLoding.show]);


	return (
		show && 
		<div className="pyo-loding">
			<div className={`pyo-loding-inner ${showClass}`}>
				<div className='pyo-loding-loader'></div>
			</div>
		</div>
	);
};

export default PyoLoding;
