import { SET_USERS } from "../../ActionsConstants";

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
