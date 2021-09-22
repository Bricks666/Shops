import { ADD_CAS } from "../../ActionsConstants";

export const addCas = (bookAddress, CAS) => {
  return {
    type: ADD_CAS,
    bookAddress,
    CAS,
  };
};
