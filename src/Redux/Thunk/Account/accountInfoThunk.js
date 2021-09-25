import { subscribeThunk } from "../Subscribes/subscribeThunk";
import { setAccountInfo } from "../../Actions/Account/Set/setAccountInfo";

export const accountInfoThunk = () => {
  return async (dispatch, getState) => {
    const state = getState();

    const result = await state.contract.methods.user(state.user.address).call();

    dispatch(setAccountInfo(result));
    dispatch(subscribeThunk());
  };
};
