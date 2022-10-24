import { Address } from '@/types';
import { contract } from './instance';

export const getAll = async (shopId: number) => {
	return contract.methods.get_reviews(shopId).call();
};

export const getOne = async (shopId: number, id: number) => {
	return contract.methods.reviews(shopId, id).call();
};

export const create = async (
	sender: Address,
	shopId: number,
	content: string,
	mark: number
) => {
	return contract.methods.create_review(shopId, content, mark).send({
		from: sender,
	});
};

export const reaction = async (
	sender: Address,
	shopId: number,
	id: number,
	reaction: number
) => {
	return contract.methods.reaction_review(shopId, id, reaction).send({
		from: sender,
	});
};
