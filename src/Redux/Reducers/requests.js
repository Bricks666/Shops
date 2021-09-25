import {
  ADD_REQUEST,
  CHANGE_ROLE,
  FINISH_REQUEST,
  NEW_ROLE,
  SET_ACCOUNT,
  BE_SET_ADMIN_REQUESTS,
  BE_SET_BUYER_REQUESTS,
  BE_SET_SALESMAN_REQUESTS,
} from "../ActionsConstants";
import { initialState } from "../initialState";

export const requests = (state = initialState.requests, action) => {
  switch (action.type) {
    case BE_SET_ADMIN_REQUESTS: {
      return {
        ...state,
        beAdmin: action.requests,
      };
    }
    case BE_SET_SALESMAN_REQUESTS: {
      return {
        ...state,
        beSalesman: action.requests,
      };
    }
    case BE_SET_BUYER_REQUESTS: {
      return {
        ...state,
        beBuyer: action.requests,
      };
    }
    case ADD_REQUEST: {
      if (action.requestType !== undefined) {
        const newState = { ...state };

        newState[action.requestType] = [
          action.request,
          ...newState[action.requestType],
        ];
        return newState;
      }
      return state;
    }
    case FINISH_REQUEST: {
      if (action.requestType !== undefined) {
        const newState = { ...state };
        newState[action.requestType] = newState[action.requestType].map(
          (request) => {
            if (request.id === action.requestId) {
              return {
                ...request,
                finished: true,
              };
            }
            return request;
          }
        );

        return newState;
      }
      return state;
    }
    case CHANGE_ROLE:
    case NEW_ROLE:
    case SET_ACCOUNT: {
      return {
        beAdmin: [],
        beBuyer: [],
        beSalesman: [],
      };
    }
    default: {
      return state;
    }
  }
};
