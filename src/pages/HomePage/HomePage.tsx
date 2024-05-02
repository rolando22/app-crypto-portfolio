import { Outlet } from 'react-router-dom';
import { Button, Main } from './styles';
import { useAuth } from '../../hooks';

export function HomePage() {
	const { logout } = useAuth();

	const handlerOnClickLogout = () => {
		logout();
	};

	return (
		<>
			<Button onClick={handlerOnClickLogout}>Cerrar Sesión</Button>
			<Main>
				<Outlet />
			</Main>
		</>
	);
}
