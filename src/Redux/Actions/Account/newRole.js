import { NEW_ROLE } from "../../ActionsConstants";

export const newRole = (role) => {
  return {
    type: NEW_ROLE,
    role,
  };
};
