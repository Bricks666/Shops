import {
  ADD_SALESMAN,
  ADD_SHOP,
  REMOVE_SALESMAN,
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
            toValidSalesman(salesman)
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
        if (shop.id === +action.shopId) {
          return {
            ...shop,
            showSalesmen: !shop.showSalesmen,
          };
        }

        return shop;
      });
    }
    case ADD_SALESMAN: {
      return state.map((shop) => {
        if (shop.id === action.shopId) {
          return {
            ...shop,
            salesmen: [action.salesman, ...shop.salesmen],
          };
        }
        return shop;
      });
    }
    case REMOVE_SALESMAN: {
      return state.map((shop) => {
        if (shop.id === +action.id) {
          return {
            ...shop,
            salesmen: shop.salesmen.filter(
              (salesman) => salesman.address !== action.salesmanAddress
            ),
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
