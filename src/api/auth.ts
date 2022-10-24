import { keccak256 } from 'web3-utils';
import { UserResponse } from '@/models';
import { Address } from '@/types';
import { contract } from './instance';

export const login = async (
	sender: Address,
	password: string
): Promise<UserResponse> => {
	return contract.methods.login(keccak256(password)).call({ from: sender });
};

export const registration = async (
	sender: Address,
	password: string
): Promise<void> => {
	return contract.methods
		.registration(keccak256(password))
		.call({ from: sender });
};
