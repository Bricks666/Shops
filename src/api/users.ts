import { UserResponse } from '@/models';
import { Address } from '@/types';
import { contract, subscribe } from './instance';

export const getOne = async (login: Address): Promise<UserResponse> => {
	return contract.methods.users[login].call();
};

export const getAllAddresses = async (): Promise<Address[]> => {
	return contract.methods.get_user_addresses().call();
};
