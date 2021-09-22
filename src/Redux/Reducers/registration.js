import {
  ABORT_REG,
  END_REG,
  INPUT_FIO_REG,
  INPUT_LOGIN_REG,
  INPUT_PASSWORD_REG,
  SET_ACCOUNT,
  START_REG,
} from "../ActionsConstants";
import { initialState } from "../initialState";

export const registration = (state = initialState.registration, action) => {
  switch (action.type) {
    case INPUT_PASSWORD_REG: {
      return {
        ...state,
        password: action.password,
      };
    }
    case INPUT_FIO_REG: {
      return {
        ...state,
        fio: action.fio,
      };
    }
    case INPUT_LOGIN_REG: {
      return {
        ...state,
        login: action.login,
      };
    }
    case START_REG: {
      return {
        ...state,
        isDisabled: true,
        password: "",
        login: "",
        fio: "",
      };
    }
    case ABORT_REG: {
      return {
        ...state,
        isDisabled: false,
      };
    }
    case END_REG: {
      return {
        ...state,
        isDisabled: false,
        isReg: true,
      };
    }
    case SET_ACCOUNT: {
      return {
        ...state,
        isDisabled: false,
        isReg: false,
        password: "",
        login: "",
        fio: "",
      };
    }
    default:
      return state;
  }
};
