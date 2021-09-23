import {
  ABORT_SEND_COMMENT,
  END_SEND_COMMENT,
  INPUT_NEW_COMMENT,
  INPUT_NEW_MARK,
  START_SEND_COMMENT,
  TOGGLE_SHOW_WINDOW,
} from "../ActionsConstants";
import { initialState } from "../initialState";

export const newMessage = (state = initialState.newMessage, action) => {
  switch (action.type) {
    case INPUT_NEW_COMMENT: {
      return {
        ...state,
        comment: action.comment,
      };
    }
    case INPUT_NEW_MARK: {
      return {
        ...state,
        mark: action.mark,
      };
    }
    case START_SEND_COMMENT: {
      return {
        ...state,
        isDisabled: true,
        comment: "",
        mark: "0",
      };
    }
    case ABORT_SEND_COMMENT: {
      return {
        ...state,
        isDisabled: false,
      };
    }
    case END_SEND_COMMENT: {
      return {
        ...state,
        isDisabled: false,
      };
    }
    default: {
      return state;
    }
  }
};
