import {
  ADD_CAS,
  ADD_COMMENT,
  ADD_SHOP,
  CHANGE_CAS_MARK,
  CHANGE_COMMENT_MARK,
  CHANGE_ROLE,
  NEW_ROLE,
  SET_ACCOUNT,
  SET_COMMENTS,
  SET_COMPLAINS_AND_SUGGESTIONS,
  SET_SALESMEN,
  SET_SHOPS,
} from "../ActionsConstants";
import { initialState } from "../initialState";

export const CAS = (state = initialState.CAS, action) => {
  switch (action.type) {
    case SET_SHOPS: {
      const newState = { ...state };
      for (let shop of action.shops) {
        newState[shop.addressShop] = [];
      }

      return newState;
    }
    case SET_SALESMEN: {
      const newState = { ...state };

      for (let salesman of action.salesmen) {
        newState[salesman.user_address] = [];
      }

      return newState;
    }
    case ADD_SHOP: {
      const newState = { ...state };
      newState[action.newShop.addressShop] = [];

      return newState;
    }
    case ADD_CAS: {
      const newState = { ...state };
      newState[action.address] = [...newState[action.address], action.CAS];

      return newState;
    }
    case SET_COMPLAINS_AND_SUGGESTIONS: {
      const newState = { ...state };
      newState[action.address] = action.book;

      return newState;
    }
    case CHANGE_CAS_MARK: {
      const newState = { ...state };

      for (let CAS in newState) {
        if (CAS === action.address) {
          newState[CAS] = [...newState[CAS]];
          newState[CAS][action.complainId] = {
            ...newState[CAS][action.complainId],
            likes:
              newState[CAS][action.complainId].likes +
              (+action.changes === 1 ? 1 : 0),
            dislikes:
              newState[CAS][action.complainId].dislikes +
              (+action.changes === 0 ? 1 : 0),
          };
          newState[CAS][action.complainId].users.push(action.changer);
        }
      }

      return newState;
    }
    case SET_COMMENTS: {
      const newState = { ...state };

      newState[action.shopAddress] = newState[action.shopAddress].map((CAS) => {
        if (CAS.id === action.CASId) {
          return {
            ...CAS,
            comments: action.comments,
          };
        }

        return CAS;
      });

      return newState;
    }
    case ADD_COMMENT: {

      const newState = { ...state };

      newState[action.shopAddress] = newState[action.shopAddress].map((CAS) => {
        if (CAS.id === action.CASId) {
          return {
            ...CAS,
            comments: [...CAS.comments, action.comment],
          };
        }

        return CAS;
      });

      return newState;
    }
    case CHANGE_COMMENT_MARK: {
      const newState = { ...state };

      newState[action.shopAddress] = newState[action.shopAddress].map((CAS) => {
        if (CAS.id === action.CASId) {
          return {
            ...CAS,
            comments: CAS.comments.map((comment) => {
              if (comment.id === action.commentId) {
                return {
                  ...comment,
                  likes: comment.likes + (+action.changes === 1 ? 1 : 0),
                  dislikes: comment.dislikes + (+action.changes === 0 ? 1 : 0),
                  users: [...comment.users, action.changer],
                };
              }
              return comment;
            }),
          };
        }

        return CAS;
      });

      return newState;
    }
    case CHANGE_ROLE:
    case NEW_ROLE:
    case SET_ACCOUNT: {
      return {};
    }
    default: {
      return state;
    }
  }
};
