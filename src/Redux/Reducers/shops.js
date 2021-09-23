import {
  ADD_SHOP,
  SET_SALESMEN,
  SET_SHOPS,
  TOGGLE_SHOW_SALESMEN,
} from "../ActionsConstants";
import { initialState } from "../initialState";
import { toValidSalesman } from "../Service/toValidSalesman";
import { toValidShop } from "../Service/toValidShop";

export const shops = (state = initialState.shops, action) => {
  switch (action.type) {
    case SET_SHOPS: {
      return action.shops.map(toValidShop);
    }
    case SET_SALESMEN: {
      return state.map((shop) => {
        if (+shop.id === +action.shopId) {
          shop.salesmen = action.salesmen.map((salesman) =>
            toValidSalesman(salesman, action.shopId)
          );
        }

        return shop;
      });
    }
    case ADD_SHOP: {
      action.newShop.salesmen = [];
      return [...state, action.newShop];
    }
    case TOGGLE_SHOW_SALESMEN: {
      return state.map((shop) => {
        if (+shop.id === +action.shopId) {
          return {
            ...shop,
            showSalesmen: !shop.showSalesmen,
          };
        }

        return shop;
      });
    }
    default: {
      return state;
    }
  }
};
