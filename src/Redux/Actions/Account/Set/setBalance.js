import { SET_BALANCE } from "../../../ActionsConstants";

export const setBalance = (balance) => {
  return {
    type: SET_BALANCE,
    balance,
  };
};
