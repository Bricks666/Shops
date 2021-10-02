import {
  CHANGE_ROLE,
  GUEST_ENTER,
  NEW_ROLE,
  SET_ACCOUNT,
  SET_ACCOUNT_INFO,
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
        role: "0",
      };
    }
    default: {
      return state;
    }
  }
};
