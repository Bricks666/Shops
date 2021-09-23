import { startLogin } from "./startLogin";
import { abortLogin } from "./abortLogin";
import { logged } from "./logged";
import { accountInfoThunk } from "../Account/accountInfoThunk";
import { subscribeThunk } from "../Contract/subscribeThunk";

export const loginThunk = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const login = state.login.login;
    const password = state.login.password;
    dispatch(startLogin());

    try {
      const result = await state.contract.methods
        .LoginUser(login, password)
        .call({ from: state.user.address });

      if (result !== true) {
        throw new Error("Что то пошло не так");
      }

      dispatch(logged());
      dispatch(accountInfoThunk());
      dispatch(subscribeThunk());
    } catch (e) {
      dispatch(abortLogin());
    }
  };
};
