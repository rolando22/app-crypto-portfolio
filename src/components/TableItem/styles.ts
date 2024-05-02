import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TD = styled.td`
	border-bottom: 1px solid #6b6b6b;
	text-align: center;
	padding: 5px;
`;

export const LinkStyled = styled(Link)`
	text-decoration: none;
`;

export const Button = styled.button`
	background-color: transparent;
	cursor: pointer;
`;
