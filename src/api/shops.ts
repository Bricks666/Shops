import { Address } from '@/types';
import { keccak256 } from 'web3-utils';
import { contract } from './instance';

export const getAll = async () => {
	return contract.methods.get_shops().call();
};

export const getOne = async (id: number) => {
	return contract.methods.shops(id).call();
};

export const create = async (
	sender: Address,
	login: Address,
	password: string,
	city: string
) => {
	return contract.methods.create_shop(login, keccak256(password), city).send({
		from: sender,
	});
};

export const remove = async (sender: Address, id: number) => {
	return contract.methods.remove_shop(id).send({
		from: sender,
	});
};
