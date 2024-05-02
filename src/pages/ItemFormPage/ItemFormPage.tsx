import { useParams } from 'react-router-dom';
import { H2, Section } from './styles';
import { ItemForm } from '../../components';

export function ItemFormPage() {
	const { id } = useParams();

	return (
		<Section>
			<H2>{id == null ? 'Agregar' : 'Editar'} Criptomoneda</H2>
			<ItemForm />
		</Section>
	);
}
