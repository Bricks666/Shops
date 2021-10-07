import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";
import { changeRoleUsers } from "../../Actions/Users/changeRoleUsers";

export const subscribeChangeRoleUsers = () => {
  return (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "ChangeRoleForUsers";

    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.ChangeRole(
        (error, { returnValues }) => {

          dispatch(
            changeRoleUsers(returnValues.userAddress, returnValues.role)
          );
        }
      );

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(unsubscribeName));
    }
  };
};
