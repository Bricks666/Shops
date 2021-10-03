import { ADD_FREE_ADDRESS } from "../../ActionsConstants";

export const addFreeAddress = (address) => {
  return {
    type: ADD_FREE_ADDRESS,
    address,
  };
};
