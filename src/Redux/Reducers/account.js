import {
  CHANGE_ROLE,
  FINISH_BANK_REQUEST,
  GUEST_ENTER,
  NEW_ROLE,
  SET_ACCOUNT,
  SET_ACCOUNT_INFO,
  SET_ACCOUNT_SALESMEN,
  SET_ACCOUNT_SHOP,
  SET_BALANCE,
} from "../ActionsConstants";
import { initialState } from "../initialState";
import { toValidAccount } from "../Service/toValidAccount";

export const account = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_ACCOUNT: {
      return {
        ...state,
        address: action.address,
      };
    }
    case SET_ACCOUNT_SHOP: {
      return {
        ...state,
        ...action.shop,
      };
    }
    case SET_ACCOUNT_SALESMEN: {
      return {
        ...state,
        salesmen: action.salesmen,
      };
    }
    case SET_BALANCE: {
      return {
        ...state,
        balance: action.balance,
      };
    }
    case SET_ACCOUNT_INFO: {
      return {
        ...state,
        ...toValidAccount(action.info),
      };
    }
    case NEW_ROLE: {
      return {
        ...state,
        isAdmin: action.role === 3,
        isSalesman: action.role === 2,
        role: action.role,
      };
    }
    case CHANGE_ROLE: {
      return {
        ...state,
        role: action.role,
      };
    }
    case GUEST_ENTER: {
      return {
        ...state,
        role: "-1",
      };
    }
    case FINISH_BANK_REQUEST: {
      return {
        ...state,
        haveBankMoney: true,
      };
    }
    default: {
      return state;
    }
  }
};
