import { useAuth } from '../../hooks';
import { Button, Form, FormItem, Input } from './styles';

export function RegisterForm() {
	const { register } = useAuth();

	const handlerOnSumbitRegister = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const firstName = formData.get('firstName')?.toString() ?? '';
		const lastName = formData.get('lastName')?.toString() ?? '';
		const email = formData.get('email')?.toString() ?? '';
		const password = formData.get('password')?.toString() ?? '';
		if (firstName === '' && lastName === '' && email === '' && password === '')
			return;
		register({ firstName, lastName, email, password });
	};

	return (
		<Form onSubmit={handlerOnSumbitRegister}>
			<FormItem>
				<label htmlFor='firstName'>Nombre</label>
				<Input
					id='firstName'
					name='firstName'
					type='text'
					placeholder='Juan'
				/>
			</FormItem>
			<FormItem>
				<label htmlFor='lastName'>Apellido</label>
				<Input
					id='lastName'
					name='lastName'
					type='text'
					placeholder='Perez'
				/>
			</FormItem>
			<FormItem>
				<label htmlFor='email'>Email</label>
				<Input
					id='email'
					name='email'
					type='text'
					placeholder='mail@gmail.com'
				/>
			</FormItem>
			<FormItem>
				<label htmlFor='password'>Password</label>
				<Input
					id='password'
					name='password'
					type='password'
					placeholder='********'
				/>
			</FormItem>
			<FormItem>
				<Button>Registrarse</Button>
			</FormItem>
		</Form>
	);
}
