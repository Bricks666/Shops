import {
  ADD_CAS,
  ADD_SHOP,
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
        newState[shop.addresShop] = [];
      }

      return newState;
    }
    case SET_SALESMEN: {
      debugger;
      const newState = { ...state };

      for (let salesman of action.salesmen) {
        newState[salesman.user_address] = [];
      }

      return newState;
    }
    case ADD_SHOP: {
      const newState = { ...state };
      newState[action.newShop.addresShop] = [];

      return newState;
    }
    case ADD_CAS: {
      debugger;
      const newState = { ...state };
      newState[action.address].push(action.CAS);

      return newState;
    }
    case SET_COMPLAINS_AND_SUGGESTIONS: {
      const newState = { ...state };
      console.log(typeof action.address);
      newState[action.address] = action.book;

      return newState;
    }
    default: {
      return state;
    }
  }
};
