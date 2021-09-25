import { setUsers } from "../../Actions/Users/setUsers";
import { toValidUser } from "../../Service/toValidUser";
import { subscribeNewRoleUsers } from "../Subscribes/subscribeNewRoleUsers";
import { subscribeChangeRoleUsers } from "../Subscribes/subscribeChangeRoleUsers";
import { subscribeRemoveUser } from "../Subscribes/subscribeRemoveUser";

export const requestUsersThunk = () => {
  return async (dispatch, getState) => {
    const state = getState();

    try {
      const usersAddresses = await state.contract.methods
        .getUsersAddresses()
        .call();
      const users = [];

      for (let userAddress of usersAddresses) {
        users.push(state.contract.methods.user(userAddress).call());
      }

      dispatch(
        setUsers(
          (await Promise.all(users))
            .filter((user) => user.FIO !== "")
            .map(toValidUser)
        )
      );

      dispatch(subscribeNewRoleUsers());
      dispatch(subscribeChangeRoleUsers());
      dispatch(subscribeRemoveUser());
    } catch (e) {
      console.log(e.message);
    }
  };
};
