import { CallBack } from '@/types';
import Web3 from 'web3';
import { abi } from '../data';

export const web3 = new Web3(import.meta.env.VITE_PROVIDER_HOST);
export const contract = new web3.eth.Contract(
	abi,
	import.meta.env.VITE_CONTRACT_HOST
);

interface SubscribeResult {
	readonly unsubscribe: CallBack<never>;
}

export const subscribe = <T>(
	eventName: string,
	cb: CallBack<T>,
	filters?: Record<string, unknown>
): SubscribeResult => {
	return contract.events[eventName](
		{ filters },
		(error: unknown, { returnValues }: { returnValues: T }) => {
			if (!error) {
				cb(returnValues);
			}
		}
	);
};
