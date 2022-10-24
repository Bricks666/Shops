import { Address } from '@/types';

export enum Roles {
	user,
	salesman,
	shop,
	admin,
}

export interface UserResponse {
	readonly id: number;
	readonly login: Address;
	readonly password: string;
	readonly role: Roles;
	readonly shop_address: Address;
}

export interface User {
	readonly id: number;
	readonly login: Address;
	readonly role: Roles;
	readonly shopAddress?: Address;
}

export const userConverter = (response: UserResponse): User => {
	return {
		id: +response.id,
		login: response.login,
		role: +response.role,
		shopAddress: response.shop_address,
	};
};
