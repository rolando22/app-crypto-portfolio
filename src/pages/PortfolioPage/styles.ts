import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonContainer = styled.div`
	width: 100%;
`;

export const LinkStyled = styled(Link)`
	padding: 10px;
	border-radius: 5px;
	font-size: 16px;
	text-decoration: none;
	color: white;
	background-color: #6b6b6b;
`;

export const Table = styled.table`
	width: 100%;
	padding: 10px;
	border: 1px solid #6b6b6b;
`;

export const TH = styled.th`
	padding: 5px;
	border-bottom: 3px solid white;
`;

export const TD = styled.td`
	border-bottom: 1px solid #6b6b6b;
	text-align: center;
	padding: 5px;
`;
