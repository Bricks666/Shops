import { SET_ACCOUNT } from "../../ActionsConstants";

export const setAccount = (address) => {
  return {
    type: SET_ACCOUNT,
    address,
  };
};
