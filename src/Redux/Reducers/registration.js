import { END_REG, SET_ACCOUNT } from "../ActionsConstants";
import { initialState } from "../initialState";

export const registration = (state = initialState.registration, action) => {
  switch (action.type) {
    case END_REG: {
      return {
        ...state,
        isReg: true,
      };
    }
    case SET_ACCOUNT: {
      return {
        ...state,
        isReg: false,
      };
    }
    default:
      return state;
  }
};
