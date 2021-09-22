import { setAccount } from "./setAccount";
import { setBalance } from "./setBalacne";
import { setRefreshId } from "../StartInitial/setRefreshId";

export const refreshAccountThunk = () => {
  return (dispatch, getState) => {
    dispatch(
      setRefreshId(
        setInterval(async () => {
          const state = getState();
          const newAddress = (await state.web3.eth.getAccounts())[0];

          if (state.user.address !== newAddress) {
            dispatch(setAccount(newAddress));
          }

          const newBalance =
            (await state.web3.eth.getBalance(newAddress)) / 10 ** 18;

          if (state.user.balance !== newBalance) {
            dispatch(setBalance(newBalance));
          }
        }, 1000)
      )
    );
  };
};
