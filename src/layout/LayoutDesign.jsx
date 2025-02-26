export const LayoutDesign = ({children}) => {
	return (
		<div className="flex w-full h-full p-[30px] bg-linear-110 from-pink-500 to-purple-800">
			<div className="w-full max-w-[500px] m-auto p-[30px] rounded-[10px] bg-gradient-to-bl from-[#0f0c29] via-[#302b63] to-[#0f0c29]">
				{children}
			</div>
		</div>
	);
};