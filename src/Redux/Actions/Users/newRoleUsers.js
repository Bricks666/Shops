import { NEW_ROLE_USERS } from "../../ActionsConstants";

export const newRoleUsers = (userAddress, role) => {
  return {
    type: NEW_ROLE_USERS,
    userAddress,
    role,
  };
};
