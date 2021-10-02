import { getFormValues } from "redux-form";
import {
  ACCOUNT,
  BE_ADMIN,
  BE_BUYER,
  BE_SALESMAN,
  BUYER_REQUESTS,
  CAS_ITEM,
  CAS_LIST,
  COMMENT_BUYER_CARD,
  CAS_BUTTON,
  MAIN,
  MARK_FIELD,
  REGISTRATION,
  SALESMAN_CONTENT,
  SALESMAN_REQUESTS,
  SET_SHOP,
  SHOPS_LIST,
  SHOP_CARD_BUYER,
  USERS_LIST,
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
        const filters = getFormValues("shopsFilters")(state);
        debugger;
        return {
          shops: state.shops.filter(
            (shop) =>
              shop.address.includes(filters.address) &&
              shop.city.includes(filters.city)
          ),
        };
      };
    }
    case SHOP_CARD_BUYER: {
      return (state) => {
        return {
          isBuyer:
            state.user.isSalesman === false && state.user.isAdmin === false,
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
          disabled:
            state.CAS[ownProps.address][ownProps.id].users?.includes(
              state.user.address
            ) ||
            state.CAS[ownProps.address][ownProps.id].login === state.user.login,
        };
      };
    }
    case COMMENT_BUYER_CARD: {
      return (state, ownProps) => {
        return {
          disabled: ownProps.users.includes(state.user.address),
        };
      };
    }
    case CAS_BUTTON: {
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
          requests: state.requests.beBuyer,
        };
      };
    }
    case SALESMAN_REQUESTS: {
      return (state) => {
        return {
          requests: state.requests.beSalesman,
        };
      };
    }
    case USERS_LIST: {
      return (state) => {
        debugger;
        const filter = getFormValues("usersFilters")(state);
        return {
          users: state.users.filter(
            (user) =>
              user.address.includes(filter.address) &&
              (filter.role === "-1" || +user.role === +filter.role) &&
              user.fio.includes(filter.fio)
          ),
        };
      };
    }
    case SET_SHOP: {
      return (state, ownProps) => {
        return {
          disabled: state.user.address === ownProps.userAddress,
        };
      };
    }
    default: {
      return (state) => ({});
    }
  }
};
