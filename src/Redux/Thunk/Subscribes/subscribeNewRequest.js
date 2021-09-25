import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";
import { loadNewRequest } from "../Requests/loadNewRequest";

export const subscribeNewRequest = () => {
  return (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "NewRequest";

    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.NewRequest(
        (error, { returnValues }) => {
          dispatch(loadNewRequest(returnValues.requestType, returnValues.id));
        }
      );

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(unsubscribeName));
    }
  };
};
