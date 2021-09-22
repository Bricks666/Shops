import { setAccountInfo } from "./setAccountInfo";

export const accountInfoThunk = () => {
  return async (dispatch, getState) => {
    const state = getState();

    const result = await state.contract.methods.user(state.user.address).call();

    dispatch(setAccountInfo(result));
  };
};
