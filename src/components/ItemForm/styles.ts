import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

export const FormItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
`;

export const Input = styled.input`
	padding: 8px;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: end;
	gap: 20px;
	width: 100%;
`;

export const Button = styled.button`
	padding: 10px;
	border-radius: 5px;
	font-size: 16px;
	cursor: pointer;
`;
