import { Address } from '@/types';
import { contract } from './instance';

export const getAll = async (shopId: number, reviewId: number) => {
	return contract.methods.get_comments(shopId, reviewId).call();
};

export const getOne = async (shopId: number, reviewId: number, id: number) => {
	return contract.methods.comments(shopId, reviewId, id).call();
};

export const create = async (
	sender: Address,
	shopId: number,
	reviewId: number,
	content: string
) => {
	return contract.methods.create_comment(shopId, reviewId, content).send({
		from: sender,
	});
};

export const reaction = async (
	sender: Address,
	shopId: number,
	reviewId: number,
	id: number,
	reaction: number
) => {
	return contract.methods
		.reaction_comment(shopId, reviewId, id, reaction)
		.send({
			from: sender,
		});
};
