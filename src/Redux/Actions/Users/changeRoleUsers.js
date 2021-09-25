import { CHANGE_ROLE_USERS } from "../../ActionsConstants";

export const changeRoleUsers = (userAddress, role) => {
  return {
    type: CHANGE_ROLE_USERS,
    userAddress,
    role,
  };
};
