import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";
import { newRoleUsers } from "../../Actions/Users/newRoleUsers";

export const subscribeNewRoleUsers = () => {
  return (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "NewRoleUsers";

    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.NewRole((error, { returnValues }) => {
        dispatch(newRoleUsers(returnValues.user, returnValues.role));
      });

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(unsubscribeName));
    }
  };
};
