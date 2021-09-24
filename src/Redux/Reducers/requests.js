import {
  ADD_REQUEST,
  FINISH_REQUEST,
  SET_ACCOUNT,
  SET_ADMIN_REQUESTS,
  SET_BUYER_REQUESTS,
  SET_SALESMAN_REQUESTS,
} from "../ActionsConstants";
import { initialState } from "../initialState";

export const requests = (state = initialState.requests, action) => {
  switch (action.type) {
    case SET_ADMIN_REQUESTS: {
      return {
        ...state,
        beAdmin: action.requests,
      };
    }
    case SET_SALESMAN_REQUESTS: {
      return {
        ...state,
        beSalesman: action.requests,
      };
    }
    case SET_BUYER_REQUESTS: {
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
