import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";
import { removeUser } from "../../Actions/Users/removeUser";

export const subscribeRemoveUser = () => {
  return (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "RemoveUser";
    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.RemoveUser(
        (error, { returnValues }) => {
          debugger;
          dispatch(removeUser(returnValues.user));
        }
      );

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(unsubscribeName));
    }
  };
};
