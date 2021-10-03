import { reset, startSubmit } from "redux-form";
import { api } from "../../API/API";
import { dispatchSubmitError } from "../../Service/dispatchSubmitError";

export const sendNewComment = (shopAddress, CASId, comment) => {
  return async (dispatch, getState) => {
    try {
      debugger;
      dispatch(startSubmit("createNewComment"));

      await api.sendNewComment(shopAddress, CASId, comment);
    } catch (e) {
      dispatch(dispatchSubmitError(e, dispatch, "createNewError"));
    } finally {
      dispatch(reset("createNewComment"));
    }
  };
};
