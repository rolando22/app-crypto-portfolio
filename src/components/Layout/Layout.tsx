import { Container } from './styles';

interface Props {
	children: React.ReactNode;
}

export function Layout({ children }: Props) {
	return <Container>{children}</Container>;
}
