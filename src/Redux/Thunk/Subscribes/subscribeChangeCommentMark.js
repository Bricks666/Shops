import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { changeCommentMark } from "../../Actions/CAS/changeCommentMark";
import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";

export const subscribeChangeCommentMark = () => {
  return (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "ChangeCommentMark";

    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.MarkComment(
        (error, { returnValues }) => {
          dispatch(
            changeCommentMark(
              returnValues.bookAddress,
              returnValues.CASId,
              returnValues.commentId,
              returnValues.mark,
              returnValues.changer
            )
          );
        }
      );

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(unsubscribeName));
    }
  };
};
