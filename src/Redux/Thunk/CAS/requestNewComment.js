import { addCASComment } from "../../Actions/CAS/addCASComment";
import { toValidComment } from "../../Service/toValidComment";

export const requestNewComment = (shopAddress, CASId, commentId) => {
  return async (dispatch, getState) => {
    try {
      debugger;
      const comment = await getState()
        .contract.methods.comments(shopAddress, CASId, commentId)
        .call();

      dispatch(addCASComment(shopAddress, CASId, toValidComment(comment)));
    } catch (e) {
      console.log(e.message);
    }
  };
};
