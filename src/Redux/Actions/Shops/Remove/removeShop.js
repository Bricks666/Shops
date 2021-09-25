import { REMOVE_SHOP } from "../../../ActionsConstants";

export const removeShop = (shopAddress) => {
  return {
    type: REMOVE_SHOP,
    shopAddress,
  };
};
