import { ADD_SALESMAN } from "../../../ActionsConstants";

export const addSalesman = (salesman, shopId) => {
  return {
    type: ADD_SALESMAN,
    salesman,
    shopId,
  };
};
