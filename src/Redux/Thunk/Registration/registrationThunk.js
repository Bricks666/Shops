import { endReg } from "../../Actions/Reg/endReg";
import { hashing } from "../../Service/hashing";
import { reset, startSubmit } from "redux-form";
import { dispatchSubmitError } from "../../Service/dispatchSubmitError";

export const registrationThunk = (fio, login, password) => {
  return async (dispatch, getState) => {
    const state = getState();
    const passwordHashed = hashing(password);

    dispatch(reset("registration"));
    dispatch(startSubmit("registration"));

    try {
      await state.contract.methods
        .regUser(fio, passwordHashed, login)
        .send({ from: state.user.address });

      dispatch(endReg());
    } catch (e) {
      dispatchSubmitError(e, dispatch, "registration");
    }
  };
};
