import { Navigate, useRoutes } from 'react-router-dom';
import {
	HomePage,
	ItemFormPage,
	LoginPage,
	Portfolio,
	RegisterPage,
} from '../pages';
import { getTokenService } from '../services';
import { config } from '../config';

const { tokenZergexKey } = config;

export const AppRoutes = () => {
	const isUserSigin = getTokenService(tokenZergexKey);

	const routes = [
		{
			path: '/',
			element: !isUserSigin ? (
				<LoginPage />
			) : (
				<Navigate
					replace
					to='/home'
				/>
			),
		},
		{
			path: '/register',
			element: !isUserSigin ? (
				<RegisterPage />
			) : (
				<Navigate
					replace
					to='/home'
				/>
			),
		},
		{
			path: '/home',
			element: <HomePage />,
			children: [
				{
					path: '/home',
					element: isUserSigin ? (
						<Portfolio />
					) : (
						<Navigate
							replace
							to='/'
						/>
					),
				},
				{
					path: '/home/new-item-form',
					element: isUserSigin ? (
						<ItemFormPage />
					) : (
						<Navigate
							replace
							to='/'
						/>
					),
				},
				{
					path: '/home/edit-item-form/:id',
					element: isUserSigin ? (
						<ItemFormPage />
					) : (
						<Navigate
							replace
							to='/'
						/>
					),
				},
			],
		},
	];

	return useRoutes(routes);
};
