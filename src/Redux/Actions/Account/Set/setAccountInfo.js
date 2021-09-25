import { SET_ACCOUNT_INFO } from "../../../ActionsConstants";

export const setAccountInfo = (info) => {
  return {
    type: SET_ACCOUNT_INFO,
    info,
  };
};
