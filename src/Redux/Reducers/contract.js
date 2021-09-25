import {
  ADD_UNSUBSCRIBE,
  ADD_UNSUBSCRIBE_NAMES,
  CHANGE_ROLE,
  NEW_ROLE,
  SET_ACCOUNT,
  SET_CONTRACT,
  SET_UNSUBSCRIBE,
  SET_UNSUBSCRIBE_NAMES,
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
    case ADD_UNSUBSCRIBE: {
      return {
        ...state,
        unsubscribe: [...state.unsubscribe, ...action.unsubscribes],
      };
    }
    case SET_UNSUBSCRIBE_NAMES: {
      return {
        ...state,
        unsubscribeNames: action.unsubscribeNames,
      };
    }
    case ADD_UNSUBSCRIBE_NAMES: {
      return {
        ...state,
        unsubscribeNames: [...state.unsubscribeNames, action.unsubscribeNames],
      };
    }
    case CHANGE_ROLE:
    case NEW_ROLE:
    case SET_ACCOUNT: {
      for (const unsub of state.unsubscribe) {
        unsub.unsubscribe();
      }
      return {
        ...state,
        unsubscribe: [],
        unsubscribeNames: [],
      };
    }
    default: {
      return state;
    }
  }
};
