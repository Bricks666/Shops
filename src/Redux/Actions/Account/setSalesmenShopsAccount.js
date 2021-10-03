import { SET_ACCOUNT_SALESMEN } from "../../ActionsConstants";

export const setSalesmenShopsAccount = (salesmen) => {
  return {
    type: SET_ACCOUNT_SALESMEN,
    salesmen,
  };
};
