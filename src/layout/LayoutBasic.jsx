import { Outlet } from 'react-router-dom';
import { Header } from '@/layout/Header';

export const LayoutBasic = () => {
	return (
		<div className='pyo-wrap'>
			<Header />
			<div className='pyo-contents'>
				<Outlet />
			</div>
		</div>
	);
};