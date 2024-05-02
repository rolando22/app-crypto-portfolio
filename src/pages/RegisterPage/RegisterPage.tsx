import { RegisterForm } from '../../components';
import { H2, LinkStyled, Section } from './styles';

export function RegisterPage() {
	return (
		<Section>
			<H2>Registro de Usuario</H2>
			<RegisterForm />
			<LinkStyled to='/'>Iniciar Sesión</LinkStyled>
		</Section>
	);
}
