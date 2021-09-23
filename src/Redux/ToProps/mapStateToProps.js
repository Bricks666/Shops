import {
  ACCOUNT,
  BE_ADMIN,
  BE_BUYER,
  BE_SALESMAN,
  BUYER_REQUESTS,
  CAS_ITEM,
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
  SALESMAN_CONTENT,
  SALESMEN_LIST,
  SHOPS_LIST,
  SHOP_CARD,
} from "../ComponentConstants";

export const mapStateToProps = (component) => {
  switch (component) {
    case MAIN: {
      return (state) => {
        return {
          isLogin: state.login.isLogin,
          isReg: state.registration.isReg,
          role: state.user.role,
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
          isBuyer: !state.user.isSalesman && !state.user.isAdmin,
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
    case CAS_LIST: {
      return (state, ownProps) => {
        return {
          CAS: state.CAS[ownProps.address] ?? [],
        };
      };
    }
    case CAS_ITEM: {
      return (state, ownProps) => {
        return {
          disabled: state.CAS[ownProps.address][ownProps.id].users?.includes(
            state.user.address
          ),
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
    case SALESMAN_CONTENT: {
      return (state) => {
        return {
          address: state.user.address,
        };
      };
    }
    case BUYER_REQUESTS: {
      return (state) => {
        return {
          buyer: state.requests.beBuyer,
        };
      };
    }
    default: {
      return (state) => ({});
    }
  }
};
