import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";
import { changeMark } from "../../Actions/CAS/changeMark";

export const subscribeChangeCASMark = () => {
  return (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "ChangeCASMark";

    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.MarkComplaint(
        (error, { returnValues }) => {
          dispatch(
            changeMark(
              returnValues.shopAddress,
              returnValues.complaintsId,
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
