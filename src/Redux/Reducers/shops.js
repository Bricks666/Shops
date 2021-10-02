import {
  ADD_SALESMAN,
  ADD_SHOP,
  CHANGE_ROLE,
  NEW_ROLE,
  REMOVE_SALESMAN,
  REMOVE_SHOP,
  SET_ACCOUNT,
  SET_SALESMEN,
  SET_SHOPS,
} from "../ActionsConstants";
import { initialState } from "../initialState";
import { toValidSalesman } from "../Service/toValidSalesman";

export const shops = (state = initialState.shops, action) => {
  switch (action.type) {
    case SET_SHOPS: {
      return action.shops;
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
    case REMOVE_SHOP: {
      return state.filter((shop) => shop.address !== action.shopAddress);
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
    case CHANGE_ROLE:
    case NEW_ROLE:
    case SET_ACCOUNT: {
      return [];
    }
    default: {
      return state;
    }
  }
};
