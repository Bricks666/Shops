import Web3 from "web3";
import { setAccount } from "../Account/setAccount";
import { setWeb3 } from "./setWeb3";
import { setBalance } from "../Account/setBalacne";
import { refreshAccountThunk } from "../Account/refreshAccountThunk";
import { setContract } from "../Contract/setContract";

export const startInitialThunk = () => {
  return async (dispatch, getState) => {
    const dataForContract = getState().dataForContract;

    const web3 = new Web3(await Web3.givenProvider);

    dispatch(setWeb3(web3));

    const address = (await web3.eth.getAccounts())[0];

    dispatch(setAccount(address));

    const balance = (await web3.eth.getBalance(address)) / 10 ** 18;

    dispatch(setBalance(balance));

    dispatch(refreshAccountThunk());

    const contract = new web3.eth.Contract(
      dataForContract.abi,
      dataForContract.address
    );

    dispatch(setContract(contract));
  };
};
