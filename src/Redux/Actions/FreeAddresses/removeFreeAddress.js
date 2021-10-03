import { REMOVE_FREE_ADDRESS } from "../../ActionsConstants";

export const removeFreeAddress = (address) => {
  return {
    type: REMOVE_FREE_ADDRESS,
    address,
  };
};
