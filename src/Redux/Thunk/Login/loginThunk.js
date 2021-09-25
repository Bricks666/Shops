import { startLogin } from "../../Actions/Login/startLogin";
import { abortLogin } from "../../Actions/Login/abortLogin";
import { logged } from "../../Actions/Login/logged";
import { accountInfoThunk } from "../Account/accountInfoThunk";
import { hashing } from "../../Service/hashing";

export const loginThunk = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const login = state.login.login;
    const password = hashing(state.login.password);
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
    } catch (e) {
      dispatch(abortLogin());
    }
  };
};
