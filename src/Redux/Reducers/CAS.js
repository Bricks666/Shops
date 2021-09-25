import {
  ADD_CAS,
  ADD_SHOP,
  CHANGE_MARK,
  CHANGE_ROLE,
  NEW_ROLE,
  SET_ACCOUNT,
  SET_COMPLAINS_AND_SUGGESTIONS,
  SET_SALESMEN,
  SET_SHOPS,
} from "../ActionsConstants";
import { initialState } from "../initialState";

export const CAS = (state = initialState.CAS, action) => {
  switch (action.type) {
    case SET_SHOPS: {
      const newState = { ...state };
      for (let shop of action.shops) {
        newState[shop.addressShop] = [];
      }

      return newState;
    }
    case SET_SALESMEN: {
      const newState = { ...state };

      for (let salesman of action.salesmen) {
        newState[salesman.user_address] = [];
      }

      return newState;
    }
    case ADD_SHOP: {
      const newState = { ...state };
      newState[action.newShop.addressShop] = [];

      return newState;
    }
    case ADD_CAS: {
      const newState = { ...state };
      newState[action.address] = [...newState[action.address], action.CAS];

      return newState;
    }
    case SET_COMPLAINS_AND_SUGGESTIONS: {
      const newState = { ...state };
      newState[action.address] = action.book;

      return newState;
    }
    case CHANGE_MARK: {
      const newState = { ...state };

      for (let CAS in newState) {
        if (CAS === action.address) {
          newState[CAS] = [...newState[CAS]];
          newState[CAS][action.complainId] = {
            ...newState[CAS][action.complainId],
            mark:
              +newState[CAS][action.complainId].mark +
              (+action.changes ? 1 : -1),
          };
          newState[CAS][action.complainId].users.push(action.changer);
        }
      }

      return newState;
    }
    case CHANGE_ROLE:
    case NEW_ROLE:
    case SET_ACCOUNT: {
      return {};
    }
    default: {
      return state;
    }
  }
};
