import { ADD_CAS } from "../../ActionsConstants";

export const addNewCAS = (address, CAS) => {
  return {
    type: ADD_CAS,
    address,
    CAS,
  };
};
