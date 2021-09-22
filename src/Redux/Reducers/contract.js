import {
  SET_ACCOUNT,
  SET_CONTRACT,
  SET_UNSUBSCRIBE,
} from "../ActionsConstants";
import { initialState } from "../initialState";

export const contract = (state = initialState.contract, action) => {
  switch (action.type) {
    case SET_CONTRACT: {
      return {
        ...state,
        ...action.contract,
      };
    }
    case SET_UNSUBSCRIBE: {
      return {
        ...state,
        unsubscribe: action.unsubscribe,
      };
    }
    case SET_ACCOUNT: {
      for (const unsub of state.unsubscribe) {
        unsub.unsubscribe();
      }
      return {
        ...state,
        unsubscribe: [],
      };
    }
    default: {
      return state;
    }
  }
};
