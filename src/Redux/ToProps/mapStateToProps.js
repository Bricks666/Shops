import { SHOP_CARD } from "../ActionsConstants";
import {
  ACCOUNT,
  BE_ADMIN,
  BE_BUYER,
  BE_SALESMAN,
  CAS_LIST,
  COMMENT_FIELD,
  LOGIN,
  LOGIN_LOGIN,
  LOGIN_PASSWORD,
  MAIN,
  MARK_FIELD,
  NEW_COMMENT,
  REGISTRATION,
  REG_FIO,
  REG_LOGIN,
  REG_PASSWORD,
  SALESMEN_LIST,
  SHOPS_LIST,
} from "../ComponentConstants";

export const mapStateToProps = (component) => {
  switch (component) {
    case MAIN: {
      return (state) => {
        return {
          isLogin: state.login.isLogin,
          isReg: state.registration.isReg,
        };
      };
    }
    case LOGIN: {
      return (state) => {
        return { isDisabled: state.login.isDisabled };
      };
    }
    case LOGIN_LOGIN: {
      return (state) => {
        return {
          value: state.login.login,
          required: true,
          type: "text",
        };
      };
    }
    case LOGIN_PASSWORD: {
      return (state) => {
        return {
          value: state.login.password,
          required: true,
          type: "password",
        };
      };
    }
    case ACCOUNT: {
      return (state) => {
        return {
          user: state.user,
        };
      };
    }
    case BE_BUYER: {
      return (state) => {
        return {
          disabled: state.user.role === "1",
        };
      };
    }
    case BE_SALESMAN: {
      return (state) => {
        return {
          disabled: state.user.role === "2",
        };
      };
    }
    case BE_ADMIN: {
      return (state) => {
        return {
          disabled: state.user.role === "3",
        };
      };
    }
    case SHOPS_LIST: {
      return (state) => {
        return { shops: state.shops };
      };
    }
    case SHOP_CARD: {
      return (state) => {
        return {
          showWindow: state.newMessage.showWindow,
        };
      };
    }
    case REGISTRATION: {
      return (state) => {
        return {
          isDisabled: state.registration.isDisabled,
        };
      };
    }
    case SALESMEN_LIST: {
      return (state) => {
        return {
          condition: state.newMessage.showWindow,
        };
      };
    }
    case REG_FIO: {
      return (state) => {
        return {
          value: state.registration.fio,
          required: true,
        };
      };
    }
    case REG_LOGIN: {
      return (state) => {
        return {
          value: state.registration.login,
          required: true,
        };
      };
    }
    case REG_PASSWORD: {
      return (state) => {
        return {
          value: state.registration.password,
          type: "password",
          required: true,
        };
      };
    }
    case NEW_COMMENT: {
      return (state) => {
        return {
          isDisabled: state.newMessage.isDisabled,
        };
      };
    }
    case COMMENT_FIELD: {
      return (state) => {
        return {
          value: state.newMessage.comment,
          required: true,
        };
      };
    }
    case MARK_FIELD: {
      return (state) => {
        return {
          value: state.newMessage.mark,
          required: true,
        };
      };
    }
    default: {
      return (state) => ({});
    }
  }
};
