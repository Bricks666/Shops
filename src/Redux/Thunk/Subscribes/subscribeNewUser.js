import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { loadNewUser } from "../Users/loadNewUser";
import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";

export const subscribeNewUser = () => {
  return (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "NewUser";

    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.NewUser((error, { returnValues }) => {
        dispatch(loadNewUser(returnValues.user));
      });

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(unsubscribeName));
    }
  };
};
