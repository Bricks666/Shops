import { authApi } from '@/api';
import { Roles } from '@/models';
import { Address, CallBack } from '@/types';

export interface AuthInfo {
	readonly address: Address;
	readonly role: Roles;
	readonly isLogin: boolean;
}

export interface AuthContext {
	readonly info: AuthInfo;
	readonly login: typeof authApi.login;
	readonly registration: typeof authApi.registration;
	readonly logout: CallBack<never>;
}
