import { LoginPage } from '@/pages/LoginPage';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const browserRouter = createBrowserRouter([
	{
		path: '/login',
		element: <LoginPage />,
	},
]);
