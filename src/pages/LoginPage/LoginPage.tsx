import { LoginForm } from '../../components';
import { H2, LinkStyled, Section } from './styles';

export function LoginPage() {
	return (
		<Section>
			<H2>Inicio de Sesión</H2>
			<LoginForm />
			<LinkStyled to='/register'>Registarse</LinkStyled>
		</Section>
	);
}
