import { subscribeThunk } from "../Subscribes/subscribeThunk";
import { setAccountInfo } from "../../Actions/Account/Set/setAccountInfo";
import { requestShopAccountInfo } from "./requestShopAccountInfo";

export const accountInfoThunk = () => {
  return async (dispatch, getState) => {
    const state = getState();

    try {
      const result = await state.contract.methods
        .user(state.user.address)
        .call();
      dispatch(setAccountInfo(result));

      if (result.role === "6") {
        dispatch(requestShopAccountInfo(state.user.address));
      }
      dispatch(subscribeThunk());
    } catch (e) {
      console.log(e.message);
    }
  };
};
