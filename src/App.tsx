import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Layout } from './components';

function App() {
	return (
		<Layout>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</Layout>
	);
}

export default App;
