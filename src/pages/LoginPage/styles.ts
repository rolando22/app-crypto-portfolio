import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

export const H2 = styled.h2`
	font-size: 42px;
`;

export const LinkStyled = styled(Link)`
	text-decoration: none;
	color: white;
	text-align: center;
`;
