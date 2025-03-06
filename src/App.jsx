import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import MyRouter from '@/router';
import { PyoAxiosSetInterceptors } from '@/axios/PyoAxios';
import PyoLoding from '@/components/PyoLoding';

function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<MyRouter />
				<PyoAxiosSetInterceptors />
				<PyoLoding />
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;
