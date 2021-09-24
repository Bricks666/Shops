import { subscribeThunk } from "../Contract/subscribeThunk";
import { setAccountInfo } from "./setAccountInfo";

export const accountInfoThunk = () => {
  return async (dispatch, getState) => {
    const state = getState();

    const result = await state.contract.methods.user(state.user.address).call();

    dispatch(setAccountInfo(result));
    dispatch(subscribeThunk());
  };
};
