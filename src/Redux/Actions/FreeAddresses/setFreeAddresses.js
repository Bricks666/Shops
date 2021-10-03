import { SET_FREE_ADDRESSES } from "../../ActionsConstants";

export const setFreeAddresses = (addresses) => {
  return {
    type: SET_FREE_ADDRESSES,
    addresses,
  };
};
