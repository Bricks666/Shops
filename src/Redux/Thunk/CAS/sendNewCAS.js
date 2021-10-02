import { reset, startSubmit } from "redux-form";
import { dispatchSubmitError } from "../../Service/dispatchSubmitError";

export const sendNewCAS = (CAS, mark, address) => {
  return async (dispatch, getState) => {
    const state = getState();

    dispatch(startSubmit("createNewCAS"));

    try {
      await state.contract.methods
        .AddComplaints(address, CAS, mark)
        .send({ from: state.user.address });
    } catch (e) {
      dispatch(dispatchSubmitError(e, dispatch, "createNewCAS"));
    } finally {
      dispatch(reset("createNewCAS"));
    }
  };
};
