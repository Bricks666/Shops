import { Address } from '@/types';
import { contract } from './instance';

export const getAll = async () => {
	return contract.methods.get_requests().call();
};

export const getOne = async (id: number) => {
	return contract.methods.requests(id).call();
};

export const create = async (
	sender: Address,
	role: number,
	shopId: number | null
) => {
	return contract.methods.create_request(role, shopId ?? 0).send({
		from: sender,
	});
};

export const approve = async (sender: Address, id: number) => {
	return contract.methods.approve_request(id).send({
		from: sender,
	});
};

export const reject = async (sender: Address, id: number) => {
	return contract.methods.reject_request(id).send({
		from: sender,
	});
};
