import * as React from 'react';
import { authApi } from '@/api';
import { authContent } from './context';
import { AuthContext, AuthInfo } from './types';

export const AuthContextProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [info, setInfo] = React.useState<AuthInfo>({
		isLogin: false,
		role: 0,
		address: '',
	});

	const login = React.useCallback<typeof authApi.login>(
		async (sender, password) => {
			const response = await authApi.login(sender, password);
			setInfo({
				address: response.login,
				role: +response.role,
				isLogin: true,
			});
			return response;
		},
		[]
	);

	const logout = React.useCallback(() => {
		setInfo({
			isLogin: false,
			role: 0,
			address: '',
		});
	}, []);

	const registration = React.useCallback<typeof authApi.registration>(
		async (sender, password) => {
			await authApi.login(sender, password);
		},
		[]
	);

	const value = React.useMemo<AuthContext>(() => {
		return {
			info,
			login,
			logout,
			registration,
		};
	}, [info]);

	return <authContent.Provider value={value}>{children}</authContent.Provider>;
};
