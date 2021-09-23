import { addNewCAS } from "../Actions/Shops/addNewCAS";
import {
  ADD_CAS,
  ADD_SHOP,
  CHANGE_MARK,
  SET_COMPLAINS_AND_SUGGESTIONS,
  SET_SALESMEN,
  SET_SHOPS,
  SHOW_COMPLAINS_AND_SUGGESTIONS,
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
        if (shop.id == action.shopId) {
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
/*     case ADD_CAS: {
      return state.map((shop) => {
        debugger;
        if (shop.addresShop === action.address) {
          return {
            ...shop,
            complainsAndSuggestions: [
              action.CAS,
              ...shop.complainsAndSuggestions,
            ],
          };
        } else {
          return {
            ...shop,
            salesmen: shop.salesmen.map((salesman) => {
              if (salesman.address === action.address) {
                return {
                  ...salesman,
                  complainsAndSuggestions: [
                    action.CAS,
                    ...salesman.complainsAndSuggestions,
                  ],
                };
              }
              return salesman;
            }),
          };
        }
      });
    } */
    case TOGGLE_SHOW_SALESMEN: {
      return state.map((shop) => {
        if (shop.id == action.shopId) {
          return {
            ...shop,
            showSalesmen: !shop.showSalesmen,
          };
        }

        return shop;
      });
    }
    /* Как то перемудрено, скорее всего можно сделать все проще */
/*     case SET_COMPLAINS_AND_SUGGESTIONS: {
      return state.map((shop) => {
        if (shop.id === action.shopId) {
          if (action.isSalesman) {
            shop.salesmen = shop.salesmen.map((salesman) => {
              if (salesman.address === action.address) {
                return {
                  ...salesman,
                  complainsAndSuggestions: action.book,
                };
              }

              return salesman;
            });
          } else {
            return {
              ...shop,
              complainsAndSuggestions: action.book,
            };
          }
        }
        return shop;
      });
    } */
    case SHOW_COMPLAINS_AND_SUGGESTIONS: {
      return state.map((shop) => {
        if (shop.id === action.shopId) {
          if (action.isSalesman) {
            shop.salesmen = shop.salesmen.map((salesman) => {
              if (salesman.address === action.address) {
                return {
                  ...salesman,
                  showCAS: !salesman.showCAS,
                };
              }
              return salesman;
            });
          } else {
            return {
              ...shop,
              showCAS: !shop.showCAS,
            };
          }
        }
        return shop;
      });
    }
    case CHANGE_MARK: {
      return state.map((shop) => {
        if (shop.addresShop === action.address) {
          return {
            ...shop,
            complainsAndSuggestions: shop.complainsAndSuggestions.map((CAS) => {
              if (CAS.id === action.complainId) {
                return {
                  ...CAS,
                  mark: +CAS.mark + (+action.changes ? 1 : -1),
                };
              }
              return CAS;
            }),
          };
        } else {
          return {
            ...shop,
            salesmen: shop.salesmen.map((salesman) => {
              if (salesman.address === action.address) {
                return {
                  ...salesman,
                  complainsAndSuggestions: salesman.complainsAndSuggestions.map(
                    (CAS) => {
                      if (CAS.id === action.complainId) {
                        return {
                          ...CAS,
                          mark: +CAS.mark + (+action.changes ? 1 : -1),
                        };
                      }
                      return CAS;
                    }
                  ),
                };
              }
              return salesman;
            }),
          };
        }
      });
    }
    default: {
      return state;
    }
  }
};
