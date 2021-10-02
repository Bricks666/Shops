import { subscribeThunk } from "../Subscribes/subscribeThunk";
import { setAccountInfo } from "../../Actions/Account/Set/setAccountInfo";

export const accountInfoThunk = () => {
  return async (dispatch, getState) => {
    const state = getState();
    try {
      const result = await state.contract.methods
        .user(state.user.address)
        .call();
      dispatch(setAccountInfo(result));
      dispatch(subscribeThunk());
    } catch (e) {
      console.log(e.message);
    }
  };
};
