import { SET_SALESMEN } from "../../../ActionsConstants";

export const setSalesmen = (shopId, salesmen) => {

  return {
    type: SET_SALESMEN,
    shopId,
    salesmen,
  };
};
