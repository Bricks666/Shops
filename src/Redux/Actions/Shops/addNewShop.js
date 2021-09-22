import { ADD_SHOP } from "../../ActionsConstants";

export const addNewShop = (newShop) => {
  return {
    type: ADD_SHOP,
    newShop,
  };
};
