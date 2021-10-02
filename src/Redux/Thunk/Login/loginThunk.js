import { accountInfoThunk } from "../Account/accountInfoThunk";
import { hashing } from "../../Service/hashing";
import { reset, startSubmit } from "redux-form";
import { dispatchSubmitError } from "../../Service/dispatchSubmitError";

export const loginThunk = (login, password) => {
  return async (dispatch, getState) => {
    const state = getState();
    const hashedPassword = hashing(password);
    dispatch(reset("login"));
    dispatch(startSubmit("login"));

    try {
      const result = await state.contract.methods
        .LoginUser(login, hashedPassword)
        .call({ from: state.user.address });

      if (result !== true) {
        throw new Error("Что то пошло не так");
      }

      dispatch(accountInfoThunk());
    } catch (e) {
      dispatchSubmitError(e, dispatch, "login");
    }
  };
};
