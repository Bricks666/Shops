import { SET_CONTRACT } from "../../ActionsConstants";

export const setContract = (contract) => {
  return {
    type: SET_CONTRACT,
    contract,
  };
};
