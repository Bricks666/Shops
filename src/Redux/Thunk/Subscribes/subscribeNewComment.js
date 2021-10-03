import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";
import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { requestNewComment } from "../CAS/requestNewComment";

export const subscribeNewComments = () => {
  return async (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "NewComment";

    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.NewComment(
        { fromBlock: "latest" },
        (error, { returnValues }) => {
          dispatch(
            requestNewComment(
              returnValues.bookAddress,
              returnValues.complaintsId,
              returnValues.commentId
            )
          );
        }
      );

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(unsubscribeName));
    }
  };
};
