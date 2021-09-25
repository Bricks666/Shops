import { changeRole } from "../../Actions/Account/changeRole";
import { setUnsubscribe } from "../../Actions/Contract/Set/setUnsubscribe";
import { newRole } from "../../Actions/Account/newRole";
import { setUnsubscribeNames } from "../../Actions/Contract/Set/setUnsubscribesNames";

export const subscribeThunk = () => {
  return (dispatch, getState) => {
    const events = getState().contract.events;
    const address = getState().user.address;

    const unsubscribe = [
      events.ChangeRole(
        {
          filter: {
            user: address,
          },
        },
        (error, response) => {
          dispatch(changeRole(response.returnValues.role));
          dispatch(subscribeThunk());
        }
      ),
      events.NewRole(
        {
          filter: {
            user: address,
          },
        },
        (error, response) => {
          dispatch(newRole(response.returnValues.role));
          dispatch(subscribeThunk());
        }
      ),
    ];

    const unsubscribeNames = ["ChangeRole", "NewRole"];

    dispatch(setUnsubscribe(unsubscribe));
    dispatch(setUnsubscribeNames(unsubscribeNames));
  };
};
