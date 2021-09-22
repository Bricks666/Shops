import { beBuyerThunk } from "../Actions/Account/Be/beBuyerThunk";
import { inputLoginLog } from "../Actions/Login/inputLoginLog";
import { inputPasswordLog } from "../Actions/Login/inputPasswordLog";
import { loginThunk } from "../Actions/Login/loginThunk";
import { startInitialThunk } from "../Actions/StartInitial/startInitialThunk";
import { beSalesmanThunk } from "../Actions/Account/Be/beSalesmanThunk";
import { beAdminThunk } from "../Actions/Account/Be/beAdminThunk";
import { requestComplainsAndSuggestions } from "../Actions/Shops/requsetComplainsAndSuggestions";
import { toggleShowCAS } from "../Actions/Shops/toggleShowCAS";
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
  SHOW_COMPLAINS_AND_SUGGESTION_BUTTON,
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
  SHOW_NEW_COMMENT,
  NEW_COMMENT,
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
import { SHOP_CARD } from "../ActionsConstants";

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
    case SHOPS_LIST: {
      return {
        loadShops: requestShopsThunk,
      };
    }
    case SHOP_CARD: {
      return {
        close: toggleShowWindow,
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
    case SHOW_COMPLAINS_AND_SUGGESTION_BUTTON: {
      return (dispatch, ownProps) => {
        return {
          onClick() {
            dispatch(
              toggleShowCAS(
                ownProps.address,
                ownProps.shopId,
                ownProps.isSalesman
              )
            );
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
            debugger;
            evt.preventDefault();
            dispatch(sendComment(ownProps.address));
          },
        };
      };
    }
    case SHOW_NEW_COMMENT: {
      return {
        onClick: toggleShowWindow,
      };
    }
    default: {
      return {};
    }
  }
};
