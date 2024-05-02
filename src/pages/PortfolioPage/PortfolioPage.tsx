import { TableItem } from '../../components';
import { usePortfolio } from '../../hooks';
import { ButtonContainer, LinkStyled, Table, TH } from './styles';

const tableTitles = [
	'Símbolo',
	'Cripto',
	'Precio de Compra',
	'Cantidad',
	'Inversión',
	'Editar',
	'Eliminar',
];

export function Portfolio() {
	const { portfolio } = usePortfolio();

	return (
		<>
			<h1>Portafolio de Criptomonedas</h1>
			<ButtonContainer>
				<LinkStyled to='/home/new-item-form'>Agregar Cripto</LinkStyled>
			</ButtonContainer>
			<Table>
				<thead>
					<tr>
						{tableTitles.map(title => (
							<TH>{title}</TH>
						))}
					</tr>
				</thead>
				<tbody>
					{portfolio?.map(item => (
						<TableItem
							key={item.id}
							id={item.id}
							ticker={item.ticker}
							crypto={item.crypto}
							purchasePrice={item.purchasePrice}
							amount={item.amount}
						/>
					))}
				</tbody>
			</Table>
		</>
	);
}
