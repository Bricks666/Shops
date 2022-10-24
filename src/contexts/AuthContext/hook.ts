import { useContext } from 'react';
import { authContent } from './context';
import { AuthContext } from './types';

export const useAuth = (): AuthContext => {
	const context = useContext(authContent);

	if (!context) {
		throw new Error(
			'useAuth must be used only inside AuthContextProvider component'
		);
	}

	return context;
};
