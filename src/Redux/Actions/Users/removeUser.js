import { REMOVE_USER } from "../../ActionsConstants";

export const removeUser = (userAddress) => {
  return {
    type: REMOVE_USER,
    userAddress,
  };
};
