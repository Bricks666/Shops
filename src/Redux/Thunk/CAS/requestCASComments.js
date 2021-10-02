import { setCASComments } from "../../Actions/CAS/setCASComments";
import { toValidComment } from "../../Service/toValidComment";
import { subscribeNewComments } from "../Subscribes/subscribeNewComment";
import { subscribeChangeCommentMark } from "../Subscribes/subscribeChangeCommentMark";

export const requestCASComments = (shopAddress, CASId) => {
  return async (dispatch, getState) => {
    try {
      const comments = await getState()
        .contract.methods.getCASComments(shopAddress, CASId)
        .call();

      dispatch(
        setCASComments(shopAddress, CASId, comments.map(toValidComment))
      );

      dispatch(subscribeNewComments());
      dispatch(subscribeChangeCommentMark());
    } catch (e) {
      console.log(e.message);
    }
  };
};
