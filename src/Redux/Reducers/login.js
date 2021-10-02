import { GUEST_ENTER, LOGGED, SET_ACCOUNT } from "../ActionsConstants";
import { initialState } from "../initialState";

export const login = (state = initialState.login, action) => {
  switch (action.type) {
    case LOGGED: {
      return {
        ...state,
        isLogin: true,
      };
    }
    case SET_ACCOUNT: {
      return {
        ...state,
        isLogin: false,
      };
    }
    case GUEST_ENTER: {
      return {
        ...state,
        isLogin: true,
      };
    }
    default: {
      return state;
    }
  }
};
