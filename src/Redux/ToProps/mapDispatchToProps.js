import { beBuyerThunk } from "../Actions/Account/Be/beBuyerThunk";
import { inputLoginLog } from "../Actions/Login/inputLoginLog";
import { inputPasswordLog } from "../Actions/Login/inputPasswordLog";
import { loginThunk } from "../Actions/Login/loginThunk";
import { startInitialThunk } from "../Actions/StartInitial/startInitialThunk";
import { beSalesmanThunk } from "../Actions/Account/Be/beSalesmanThunk";
import { beAdminThunk } from "../Actions/Account/Be/beAdminThunk";
import { requestComplainsAndSuggestions } from "../Actions/Shops/requsetComplainsAndSuggestions";
import { inputNewComment } from "../Actions/NewMessage/inputNewComment";
import { inputNewMark } from "../Actions/NewMessage/inputNewMark";

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
} from "../ComponentConstants";
import { requestShopsThunk } from "../Actions/Shops/requestShopsThunk";
import { toggleShowSalesmen } from "../Actions/Shops/toggleShowSalesmen";
import { requestShopsSalesmen } from "../Actions/Shops/requestShopsSalesmen";
import { likeComment } from "../Actions/Shops/likeComment";
import { registrationThunk } from "../Actions/Reg/registrationThunk";
import { inputFIOReg } from "../Actions/Reg/inputFIOReg";
import { inputPasswordReg } from "../Actions/Reg/inputPasswordReg";
import { inputLoginReg } from "../Actions/Reg/inputLoginReg";
import { dislikeComment } from "../Actions/Shops/dislikeComment";
import { sendComment } from "../Actions/NewMessage/sendComment";
import { toggleShowWindow } from "../Actions/NewMessage/toggleShowWindow";
import { beBuyerForever } from "../Actions/Account/Be/beBuyerForeverThunk";
import { beSalesmanForever } from "../Actions/Account/Be/beSalesmanForever";
import { loadBuyerRequests } from "../Actions/Requests/loadBuyerRequests";
import { cancelBuyerRequest } from "../Actions/Requests/cancelBuyerRequest";
import { acceptBuyerRequest } from "../Actions/Requests/acceptBuyerRequest";
import { loadSalesmanRequests } from "../Actions/Requests/loadSalesmanRequests";
import { acceptSalesmanRequest } from "../Actions/Requests/acceptSalesmanRequest";
import { cancelSalesmanRequest } from "../Actions/Requests/cancelSalesmanRequest";

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
        loadRequests: loadBuyerRequests,
      };
    }
    case CANCEL_BUYER_REQUEST: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(cancelBuyerRequest(ownProps.requestId));
          },
        };
      };
    }
    case ACCEPT_BUYER_REQUEST: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(acceptBuyerRequest(ownProps.requestId));
          },
        };
      };
    }
    case SALESMAN_REQUESTS: {
      return {
        loadRequests: loadSalesmanRequests,
      };
    }
    case ACCEPT_SALESMAN_REQUEST: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(acceptSalesmanRequest(ownProps.requestId));
          },
        };
      };
    }
    case CANCEL_SALESMAN_REQUEST: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(cancelSalesmanRequest(ownProps.requestId));
          },
        };
      };
    }
    default: {
      return {};
    }
  }
};
