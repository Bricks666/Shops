import { SET_ACCOUNT_SHOP } from "../../ActionsConstants";

export const setShopAccountInfo = (shop) => {
  return {
    type: SET_ACCOUNT_SHOP,
    shop,
  };
};
