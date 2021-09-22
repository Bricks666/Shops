import { startReg } from "./startReg";
import { abortReg } from "./abortReg";
import { endReg } from "./endReg";

export const registrationThunk = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const fio = state.registration.fio;
    const password = state.registration.password;
    const login = state.registration.login;

    dispatch(startReg());
    try {
      await state.contract.methods
        .regUser(fio, password, login)
        .send({ from: state.user.address });

      dispatch(endReg());
    } catch (e) {
      dispatch(abortReg());
    }
  };
};
