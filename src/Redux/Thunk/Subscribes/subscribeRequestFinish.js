import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";
import { finishRequest } from "../../Actions/Requests/finishRequest";

export const subscribeRequestFinish = () => {
  return (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "RequestFinish";

    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.RequestFinished(
        (error, { returnValues }) => {
          dispatch(finishRequest(returnValues.id, returnValues.requestType));
        }
      );

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(unsubscribeName));
    }
  };
};
