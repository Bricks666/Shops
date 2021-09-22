import { CHANGE_ROLE } from "../../ActionsConstants";

export const changeRole = (role) => {
  return {
    type: CHANGE_ROLE,
    role,
  };
};
