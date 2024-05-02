import { PortfolioItem } from '../../types/portfolio';
import { Button, LinkStyled, TD } from './styles';
import { usePortfolio } from '../../hooks';

interface Props {
	id: PortfolioItem['id'];
	ticker: PortfolioItem['ticker'];
	crypto: PortfolioItem['crypto'];
	purchasePrice: PortfolioItem['purchasePrice'];
	amount: PortfolioItem['amount'];
}

export function TableItem({
	id,
	ticker,
	crypto,
	purchasePrice,
	amount,
}: Props) {
	const { deleteItem } = usePortfolio();

	const handlerOnClickDelete = (id: PortfolioItem['id']) => () => {
		deleteItem(id);
	};

	return (
		<tr>
			<TD>{ticker}</TD>
			<TD>{crypto}</TD>
			<TD>{purchasePrice.toFixed(6)}$</TD>
			<TD>{amount}</TD>
			<TD>{(purchasePrice * amount).toFixed(2)}$</TD>
			<TD>
				<LinkStyled to={`edit-item-form/${id}`}>✏</LinkStyled>
			</TD>
			<TD>
				<Button onClick={handlerOnClickDelete(id)}>❌</Button>
			</TD>
		</tr>
	);
}
