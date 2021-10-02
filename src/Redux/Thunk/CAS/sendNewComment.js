import { reset, startSubmit } from "redux-form";
import { dispatchSubmitError } from "../../Service/dispatchSubmitError";

export const sendNewComment = (shopAddress, CASId, comment) => {
  return async (dispatch, getState) => {
    try {

      dispatch(startSubmit("createNewComment"));

      await getState()
        .contract.methods.AddComment(shopAddress, CASId, comment)
        .send({ from: getState().user.address });
    } catch (e) {
      dispatch(dispatchSubmitError(e, dispatch, "createNewError"));
    } finally {
      dispatch(reset("createNewComment"));
    }
  };
};
