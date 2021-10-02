import {
  BE_ADMIN,
  BE_BUYER,
  BE_SALESMAN,
  MAIN,
  SALESMEN_LIST,
  SHOPS_LIST,
  CAS_LIST,
  LIKE_CAS_BUTTON,
  DISLIKE_CAS_BUTTON,
  BE_BUYER_FOREVER,
  BE_SALESMAN_OF_SHOP,
  BUYER_REQUESTS,
  CANCEL_BUYER_REQUEST,
  ACCEPT_BUYER_REQUEST,
  SALESMAN_REQUESTS,
  ACCEPT_SALESMAN_REQUEST,
  CANCEL_SALESMAN_REQUEST,
  SET_ADMIN,
  SET_SHOP,
  REMOVE_SHOP_BUTTON,
  COMMENT_LIST,
  LIKE_COMMENT_BUTTON,
  DISLIKE_COMMENT_BUTTON,
  NEW_COMMENT,
  LOGIN,
  REGISTRATION,
  NEW_CAS,
  GUEST_BUTTON,
  USERS_LIST,
} from "../ComponentConstants";
import { beBuyerThunk } from "../Thunk/Account/Be/beBuyerThunk";
import { loginThunk } from "../Thunk/Login/loginThunk";
import { startInitialThunk } from "../Actions/StartInitial/startInitialThunk";
import { beSalesmanThunk } from "../Thunk/Account/Be/beSalesmanThunk";
import { beAdminThunk } from "../Thunk/Account/Be/beAdminThunk";
import { requestCAS } from "../Thunk/CAS/requestCAS";
import { requestShopsThunk } from "../Thunk/Shops/requestShopsThunk";
import { requestShopsSalesmen } from "../Thunk/Shops/requestShopsSalesmen";
import { likeCAS } from "../Thunk/CAS/likeCAS";
import { registrationThunk } from "../Thunk/Registration/registrationThunk";
import { dislikeCAS } from "../Thunk/CAS/dislikeCAS";
import { sendNewCAS } from "../Thunk/CAS/sendNewCAS";
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
import { requestCASComments } from "../Thunk/CAS/requestCASComments";
import { likeComment } from "../Thunk/Shops/likeComment";
import { dislikeComment } from "../Thunk/Shops/dislikeComment";
import { sendNewComment } from "../Thunk/CAS/sendNewComment";
import { guestEnter } from "../Actions/Login/guestEnter";

export const mapDispatchToProps = (component) => {
  switch (component) {
    case MAIN: {
      return {
        initialApp: startInitialThunk,
      };
    }
    case LOGIN: {
      return (dispatch) => {
        return {
          onSubmit(data) {
            dispatch(loginThunk(data.login, data.password));
          },
        };
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
    case SALESMEN_LIST: {
      return (dispatch, ownProps) => {
        return {
          loadSalesmen() {
            dispatch(requestShopsSalesmen(ownProps.shopId));
          },
        };
      };
    }
    case CAS_LIST: {
      return {
        loadCAS: requestCAS,
      };
    }
    case COMMENT_LIST: {
      return (dispatch) => {
        return {
          loadComments(shopId, CASId) {
            dispatch(requestCASComments(shopId, CASId));
          },
        };
      };
    }
    case LIKE_CAS_BUTTON: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(likeCAS(ownProps.address, ownProps.CASId));
          },
        };
      };
    }
    case DISLIKE_CAS_BUTTON: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(dislikeCAS(ownProps.address, ownProps.CASId));
          },
        };
      };
    }
    case LIKE_COMMENT_BUTTON: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(
              likeComment(
                ownProps.shopAddress,
                ownProps.CASId,
                ownProps.commentId
              )
            );
          },
        };
      };
    }
    case DISLIKE_COMMENT_BUTTON: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(
              dislikeComment(
                ownProps.shopAddress,
                ownProps.CASId,
                ownProps.commentId
              )
            );
          },
        };
      };
    }
    case NEW_COMMENT: {
      return (dispatch, ownProps) => {
        return {
          onSubmit(data) {
            dispatch(
              sendNewComment(
                ownProps.shopAddress,
                ownProps.CASId,
                data.newComment
              )
            );
          },
        };
      };
    }
    case REGISTRATION: {
      return (dispatch) => {
        return {
          onSubmit(data) {
            dispatch(registrationThunk(data.fio, data.login, data.password));
          },
        };
      };
    }
    case NEW_CAS: {
      return (dispatch, ownProps) => {
        return {
          onSubmit(data) {
            dispatch(sendNewCAS(data.CAS, data.mark, ownProps.address));
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
    case USERS_LIST: {
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
    case GUEST_BUTTON: {
      return (dispatch) => {
        return {
          onClick() {
            dispatch(guestEnter());
          },
        };
      };
    }
    default: {
      return {};
    }
  }
};
