import { LayoutDesign } from "@/layout/LayoutDesign";
import { PyoButton } from '@/components/PyoButton';

export const NotFound = () => {

	return (
		<LayoutDesign>
			<div className="py-[30px] text-center text-white">
				<div className="text-[50px] tracking-[0.5rem]">404</div>
				<div className="text-[12px] opacity-50">
					Opps! Page not found
				</div>
				<div className="text-[12px] opacity-50">
					Sorry, the page you're looking for doesn't exist. <br />
					If you think something is broken, report a problem.
				</div>
			</div>
			<div className="mt-12 flex gap-2">
				<PyoButton to="/">Sign Up</PyoButton>
			</div>
		</LayoutDesign>
	);
};
