import { useNavigate } from 'react-router-dom';

export const PyoButton = ({ to, lmType = '', lmClass = '', lmEvent = false, children }) => {
	const navigate = useNavigate();

	const handleClick = (event) => {
		event.preventDefault();
		lmEvent ? lmEvent() : navigate(to);
	};

	let addClass = 'flex-1 px-4 py-3 rounded-md bg-white text-xs'
	if(lmType === 'line'){
		addClass = 'flex-1 px-4 py-3 rounded-md border border-white bg-transparent text-white text-xs';
	}

	return (
		<button onClick={handleClick} className={`${addClass} ${lmClass}`}>
			{children}
		</button>
	);
};
