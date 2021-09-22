import { SET_SHOPS } from "../../ActionsConstants";

export const setShops = (shops) => {
  return {
    type: SET_SHOPS,
    shops,
  };
};
