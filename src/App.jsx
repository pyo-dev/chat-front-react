import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import MyRouter from '@/router';

function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<MyRouter />
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;
