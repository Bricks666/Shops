import {
  ADD_USER,
  CHANGE_ROLE,
  CHANGE_ROLE_USERS,
  NEW_ROLE,
  NEW_ROLE_USERS,
  REMOVE_USER,
  SET_ACCOUNT,
  SET_USERS,
} from "../ActionsConstants";
import { initialState } from "../initialState";

export const users = (state = initialState.users, action) => {
  switch (action.type) {
    case SET_USERS: {
      return action.users.filter((user) => user !== undefined);
    }
    case REMOVE_USER: {
      return state.filter((user) => user.address !== action.userAddress);
    }
    case CHANGE_ROLE_USERS: {
      return state.map((user) => {
        if (user.address === action.userAddress) {
          return {
            ...state,
            role: action.role,
          };
        }

        return user;
      });
    }
    case NEW_ROLE_USERS: {
      return state.map((user) => {
        if (user.address === action.userAddress) {
          return {
            ...state,
            role: action.role,
            isAdmin: action.role === "3",
            isSalesman: action.role === "2",
          };
        }

        return user;
      });
    }
    case ADD_USER: {
      return action.user !== undefined ? [...state, action.user] : state;
    }
    case NEW_ROLE:
    case CHANGE_ROLE:
    case SET_ACCOUNT: {
      return [];
    }
    default: {
      return state;
    }
  }
};
