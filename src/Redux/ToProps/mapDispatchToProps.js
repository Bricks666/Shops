import {
  BE_ADMIN,
  BE_BUYER,
  BE_SALESMAN,
  LOGIN_BUTTON,
  LOGIN_LOGIN,
  LOGIN_PASSWORD,
  MAIN,
  SALESMEN_LIST,
  SHOPS_LIST,
  SHOW_SALESMEN_BUTTON,
  CAS_LIST,
  LIKE_BUTTON,
  REG_BUTTON,
  REG_FIO,
  REG_LOGIN,
  REG_PASSWORD,
  DISLIKE_BUTTON,
  COMMENT_FIELD,
  MARK_FIELD,
  SEND_COMMENT_BUTTON,
  BE_BUYER_FOREVER,
  BE_SALESMAN_OF_SHOP,
  BUYER_REQUESTS,
  CANCEL_BUYER_REQUEST,
  ACCEPT_BUYER_REQUEST,
  SALESMAN_REQUESTS,
  ACCEPT_SALESMAN_REQUEST,
  CANCEL_SALESMAN_REQUEST,
  USERS,
  SET_ADMIN,
  SET_SHOP,
  REMOVE_SHOP_BUTTON,
} from "../ComponentConstants";
import { beBuyerThunk } from "../Thunk/Account/Be/beBuyerThunk";
import { inputLoginLog } from "../Actions/Login/inputLoginLog";
import { inputPasswordLog } from "../Actions/Login/inputPasswordLog";
import { loginThunk } from "../Thunk/Login/loginThunk";
import { startInitialThunk } from "../Actions/StartInitial/startInitialThunk";
import { beSalesmanThunk } from "../Thunk/Account/Be/beSalesmanThunk";
import { beAdminThunk } from "../Thunk/Account/Be/beAdminThunk";
import { requestComplainsAndSuggestions } from "../Thunk/Shops/requsetComplainsAndSuggestions";
import { inputNewComment } from "../Actions/NewMessage/inputNewComment";
import { inputNewMark } from "../Actions/NewMessage/inputNewMark";
import { requestShopsThunk } from "../Thunk/Shops/requestShopsThunk";
import { toggleShowSalesmen } from "../Actions/Shops/toggleShowSalesmen";
import { requestShopsSalesmen } from "../Thunk/Shops/requestShopsSalesmen";
import { likeComment } from "../Thunk/Shops/likeComment";
import { registrationThunk } from "../Thunk/Registration/registrationThunk";
import { inputFIOReg } from "../Actions/Reg/inputFIOReg";
import { inputPasswordReg } from "../Actions/Reg/inputPasswordReg";
import { inputLoginReg } from "../Actions/Reg/inputLoginReg";
import { dislikeComment } from "../Thunk/Shops/dislikeComment";
import { sendComment } from "../Thunk/NewMessage/sendComment";
import { toggleShowWindow } from "../Actions/NewMessage/toggleShowWindow";
import { beBuyerForever } from "../Thunk/Account/Be/beBuyerForeverThunk";
import { beSalesmanForever } from "../Thunk/Account/Be/beSalesmanForever";
import { loadBeBuyerRequests } from "../Thunk/Requests/loadBeBuyerRequests";
import { cancelBeBuyerRequest } from "../Thunk/Requests/cancelBeBuyerRequest";
import { acceptBeBuyerRequest } from "../Thunk/Requests/acceptBeBuyerRequest";
import { loadBeSalesmanRequests } from "../Thunk/Requests/loadBeSalesmanRequests";
import { acceptBeSalesmanRequest } from "../Thunk/Requests/acceptBeSalesmanRequest";
import { cancelBeSalesmanRequest } from "../Thunk/Requests/cancelBeSalesmanRequest";
import { removeShopThunk } from "../Thunk/Shops/removeShopThunk";
import { requestUsersThunk } from "../Thunk/Users/requestUsersThunk";
import { upgradeToAdmin } from "../Thunk/Users/upgradeToAdmin";
import { setShopThunk } from "../Thunk/Users/setShopThunk";

export const mapDispatchToProps = (component) => {
  switch (component) {
    case MAIN: {
      return {
        initialApp: startInitialThunk,
      };
    }
    case LOGIN_LOGIN: {
      return (dispatch) => {
        return {
          input(evt) {
            dispatch(inputLoginLog(evt.target.value));
          },
        };
      };
    }
    case LOGIN_PASSWORD: {
      return (dispatch) => {
        return {
          input(evt) {
            dispatch(inputPasswordLog(evt.target.value));
          },
        };
      };
    }
    case LOGIN_BUTTON: {
      return {
        onClick: loginThunk,
      };
    }
    case BE_BUYER: {
      return {
        onClick: beBuyerThunk,
      };
    }
    case BE_SALESMAN: {
      return {
        onClick: beSalesmanThunk,
      };
    }
    case BE_ADMIN: {
      return {
        onClick: beAdminThunk,
      };
    }
    case BE_BUYER_FOREVER: {
      return {
        onClick: beBuyerForever,
      };
    }
    case SHOPS_LIST: {
      return {
        loadShops: requestShopsThunk,
      };
    }
    case SHOW_SALESMEN_BUTTON: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(toggleShowSalesmen(ownProps.shopId));
          },
        };
      };
    }
    case SALESMEN_LIST: {
      return (dispatch, ownProps) => {
        return {
          loadSalesmen() {
            dispatch(requestShopsSalesmen(ownProps.shopId));
          },
          close() {
            dispatch(toggleShowWindow());
          },
        };
      };
    }
    case CAS_LIST: {
      return {
        loadCAS: requestComplainsAndSuggestions,
      };
    }
    case LIKE_BUTTON: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(likeComment(ownProps.address, ownProps.CASId));
          },
        };
      };
    }
    case DISLIKE_BUTTON: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(dislikeComment(ownProps.address, ownProps.CASId));
          },
        };
      };
    }
    case REG_BUTTON: {
      return {
        onClick: registrationThunk,
      };
    }
    case REG_FIO: {
      return (dispatch) => {
        return {
          input(evt) {
            dispatch(inputFIOReg(evt.target.value));
          },
        };
      };
    }
    case REG_LOGIN: {
      return (dispatch) => {
        return {
          input(evt) {
            dispatch(inputLoginReg(evt.target.value));
          },
        };
      };
    }
    case REG_PASSWORD: {
      return (dispatch) => {
        return {
          input(evt) {
            dispatch(inputPasswordReg(evt.target.value));
          },
        };
      };
    }

    case COMMENT_FIELD: {
      return (dispatch) => {
        return {
          input(evt) {
            dispatch(inputNewComment(evt.target.value));
          },
        };
      };
    }
    case MARK_FIELD: {
      return (dispatch) => {
        return {
          input(evt) {
            dispatch(inputNewMark(evt.target.value));
          },
        };
      };
    }
    case SEND_COMMENT_BUTTON: {
      return (dispatch, ownProps) => {
        return {
          onClick(evt) {
            evt.preventDefault();
            dispatch(sendComment(ownProps.address));
          },
        };
      };
    }
    case BE_SALESMAN_OF_SHOP: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(beSalesmanForever(ownProps.shopId));
          },
        };
      };
    }
    case BUYER_REQUESTS: {
      return {
        loadRequests: loadBeBuyerRequests,
      };
    }
    case CANCEL_BUYER_REQUEST: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(cancelBeBuyerRequest(ownProps.requestId));
          },
        };
      };
    }
    case ACCEPT_BUYER_REQUEST: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(acceptBeBuyerRequest(ownProps.requestId));
          },
        };
      };
    }
    case SALESMAN_REQUESTS: {
      return {
        loadRequests: loadBeSalesmanRequests,
      };
    }
    case ACCEPT_SALESMAN_REQUEST: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(acceptBeSalesmanRequest(ownProps.requestId));
          },
        };
      };
    }
    case CANCEL_SALESMAN_REQUEST: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(cancelBeSalesmanRequest(ownProps.requestId));
          },
        };
      };
    }
    case REMOVE_SHOP_BUTTON: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(removeShopThunk(ownProps.shopId));
          },
        };
      };
    }
    case USERS: {
      return {
        loadUsers: requestUsersThunk,
      };
    }
    case SET_ADMIN: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(upgradeToAdmin(ownProps.userAddress));
          },
        };
      };
    }
    case SET_SHOP: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(setShopThunk(ownProps.userAddress));
          },
        };
      };
    }
    default: {
      return {};
    }
  }
};
