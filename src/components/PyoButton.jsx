import { useNavigate } from 'react-router-dom';

export const PyoButton = ({ to, pyoType = '', pyoClass = '', pyoEvent = false, children }) => {
	const navigate = useNavigate();

	const handleClick = (event) => {
		event.preventDefault();
		pyoEvent ? pyoEvent() : navigate(to);
	};

	let addClass = 'flex-1 px-4 py-3 rounded-md bg-white text-xs'
	if(pyoType === 'line'){
		addClass = 'flex-1 px-4 py-3 rounded-md border border-white bg-transparent text-white text-xs';
	}

	return (
		<button onClick={handleClick} className={`${addClass} ${pyoClass}`}>
			{children}
		</button>
	);
};
