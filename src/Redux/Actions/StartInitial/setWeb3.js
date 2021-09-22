import { SET_WEB3 } from "../../ActionsConstants";

export const setWeb3 = (web3) => {
  return {
    type: SET_WEB3,
    web3,
  };
};
