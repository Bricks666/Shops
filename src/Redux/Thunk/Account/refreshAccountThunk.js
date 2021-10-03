import { setAccount } from "../../Actions/Account/Set/setAccount";
import { setBalance } from "../../Actions/Account/Set/setBalance";
import { setRefreshId } from "../../Actions/StartInitial/setRefreshId";
import { api } from "../../API/API";

export const refreshAccountThunk = () => {
  return (dispatch, getState) => {
    dispatch(
      setRefreshId(
        setInterval(async () => {
          const state = getState();
          const newAddress = (await state.web3.eth.getAccounts())[0];

          if (state.user.address !== newAddress) {
            dispatch(setAccount(newAddress));
            api.refreshSender(newAddress);
          }

          const newBalance =
            (await state.web3.eth.getBalance(newAddress)) / 10 ** 18;

          if (state.user.balance !== newBalance) {
            dispatch(setBalance(newBalance));
          }
        }, 500)
      )
    );
  };
};
