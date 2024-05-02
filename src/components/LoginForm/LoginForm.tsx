import { useAuth } from '../../hooks';
import { Button, Form, FormItem, Input } from './styles';

export function LoginForm() {
	const { login } = useAuth();

	const handlerOnSumbitLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const email = formData.get('email')?.toString() ?? '';
		const password = formData.get('password')?.toString() ?? '';
		if (email === '' && password === '') return;
		login({ email, password });
	};

	return (
		<Form onSubmit={handlerOnSumbitLogin}>
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
				<Button>Ingresar</Button>
			</FormItem>
		</Form>
	);
}
