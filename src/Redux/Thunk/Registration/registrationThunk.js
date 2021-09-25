import { startReg } from "../../Actions/Reg/startReg";
import { abortReg } from "../../Actions/Reg/abortReg";
import { endReg } from "../../Actions/Reg/endReg";
import { hashing } from "../../Service/hashing";

export const registrationThunk = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const fio = state.registration.fio;
    const password = hashing(state.registration.password);
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
