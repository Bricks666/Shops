import { TOGGLE_SHOW_SALESMEN } from "../../ActionsConstants";

export const toggleShowSalesmen = (shopId) => {
  return {
    type: TOGGLE_SHOW_SALESMEN,
    shopId,
  };
};
