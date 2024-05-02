import { useNavigate, useParams } from 'react-router-dom';
import { usePortfolio } from '../../hooks';
import { Button, ButtonsContainer, Form, FormItem, Input } from './styles';

export function ItemForm() {
	const navigate = useNavigate();
	const { id } = useParams();
	const { item, addItem, editItem } = usePortfolio(parseInt(id ?? '0'));

	const handlerOnSumbit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const ticker = formData.get('ticker')?.toString() ?? '';
		const crypto = formData.get('crypto')?.toString() ?? '';
		const purchasePrice = formData.get('purchasePrice')?.toString() ?? '';
		const amount = formData.get('amount')?.toString() ?? '';
		if (ticker === '' && crypto === '' && purchasePrice === '' && amount === '')
			return;
		id == null
			? addItem({
					ticker,
					crypto,
					purchasePrice: parseFloat(purchasePrice),
					amount: parseFloat(amount),
				})
			: editItem(parseInt(id), {
					ticker,
					crypto,
					purchasePrice: parseFloat(purchasePrice),
					amount: parseFloat(amount),
				});
	};

	const handlerOnClickCancel = () => {
		navigate('/home');
	};

	return (
		<Form onSubmit={handlerOnSumbit}>
			<FormItem>
				<label htmlFor='ticker'>Símbolo</label>
				<Input
					id='ticker'
					name='ticker'
					type='text'
					placeholder='BTC, ETH, BNB...'
					defaultValue={item?.ticker}
				/>
			</FormItem>
			<FormItem>
				<label htmlFor='crypto'>Cripto</label>
				<Input
					id='crypto'
					name='crypto'
					type='text'
					placeholder='Bitcoin, Ethereum...'
					defaultValue={item?.crypto}
				/>
			</FormItem>
			<FormItem>
				<label htmlFor='purchasePrice'>Precio de Compra</label>
				<Input
					id='purchasePrice'
					name='purchasePrice'
					type='number'
					defaultValue={item?.purchasePrice}
				/>
			</FormItem>
			<FormItem>
				<label htmlFor='amount'>Cantidad</label>
				<Input
					id='amount'
					name='amount'
					type='number'
					defaultValue={item?.amount}
				/>
			</FormItem>
			<FormItem>
				<ButtonsContainer>
					<Button type='submit'>{id == null ? 'Agregar' : 'Editar'}</Button>
					<Button
						type='button'
						onClick={handlerOnClickCancel}
					>
						Cancelar
					</Button>
				</ButtonsContainer>
			</FormItem>
		</Form>
	);
}
