import {
  ABORT_LOGIN,
  INPUT_LOGIN_LOG,
  INPUT_PASSWORD_LOG,
  LOGGED,
  SET_ACCOUNT,
  START_LOGIN,
} from "../ActionsConstants";
import { initialState } from "../initialState";

export const login = (state = initialState.login, action) => {
  switch (action.type) {
    case INPUT_LOGIN_LOG: {
      return {
        ...state,
        login: action.login,
      };
    }
    case INPUT_PASSWORD_LOG: {
      return {
        ...state,
        password: action.password,
      };
    }
    case START_LOGIN: {
      return { ...state, password: "", login: "", isDisable: true };
    }
    case ABORT_LOGIN: {
      return {
        ...state,
        isDisable: false,
      };
    }
    case LOGGED: {
      return {
        ...state,
        isDisable: false,
        isLogin: true,
      };
    }
    case SET_ACCOUNT: {
      return {
        ...state,
        login: "",
        password: "",
        isDisable: false,
        isLogin: false,
        isSalesman: false,
        isAdmin: false,
        role: 0,
        fio: null,
      };
    }
    default: {
      return state;
    }
  }
};
