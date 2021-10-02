import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";
import { requestNewCAS } from "../CAS/requestNewCAS";

export const subscribeNewCAS = () => {
  return (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "NewCAS";

    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.NewComplaint(
        (error, { returnValues }) => {
          debugger;
          dispatch(
            requestNewCAS(returnValues.bookAddress, returnValues.complaintsId)
          );
        }
      );

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(unsubscribeName));
    }
  };
};
