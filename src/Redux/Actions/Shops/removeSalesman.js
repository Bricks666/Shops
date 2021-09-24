import { REMOVE_SALESMAN } from "../../ActionsConstants";

export const removeSalesman = (salesmanAddress, shopId) => {
  return {
    type: REMOVE_SALESMAN,
    salesmanAddress,
    shopId,
  };
};
