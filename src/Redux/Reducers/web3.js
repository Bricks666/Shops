import { SET_WEB3 } from "../ActionsConstants";
import { initialState } from "../initialState";

export const web3 = (state = initialState.web3, action) => {
  switch (action.type) {
    case SET_WEB3: {
      return action.web3;
    }
    default: {
      return state;
    }
  }
};
