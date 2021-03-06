import Web3 from "web3";
import { setAccount } from "../Account/Set/setAccount";
import { setWeb3 } from "./setWeb3";
import { refreshAccountThunk } from "../../Thunk/Account/refreshAccountThunk";
import { setContract } from "../Contract/Set/setContract";
import { setBalance } from "../Account/Set/setBalance";
import { startLoading } from "../Contract/startLoading";
import { api } from "../../API/API";

export const startInitialThunk = () => {
	return async (dispatch, getState) => {
		const dataForContract = getState().dataForContract;
		try {
			dispatch(startLoading());
			const socket = new WebSocket("ws://localhost:8545");
			socket.onerror = console.log.bind(console, "Error");
			socket.onopen = console.log.bind(console, "Open");
			const web3 = new Web3("ws://localhost:8545");

			dispatch(setWeb3(web3));
			const address = (await web3.eth.getAccounts())[0];
			const unlock = await web3.eth.personal.unlockAccount(address, "0000");
			console.log(unlock);
			dispatch(setAccount(address));

			const balance = (await web3.eth.getBalance(address)) / 10 ** 18;

			dispatch(setBalance(balance));

			dispatch(refreshAccountThunk());
			const contract = new web3.eth.Contract(dataForContract.abi);
			const deploiedContract = await contract
				.deploy({ data: dataForContract.bytecode })
				.send({ from: address });

			dispatch(setContract(deploiedContract));

			api.initialApi(contract, address);
		} catch (e) {
			console.log(e.message);
			startInitialThunk();
		}
	};
};
