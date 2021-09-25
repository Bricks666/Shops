import { SET_UNSUBSCRIBE_NAMES } from "../../../ActionsConstants";

export const setUnsubscribeNames = (unsubscribeNames) => {
  return {
    type: SET_UNSUBSCRIBE_NAMES,
    unsubscribeNames,
  };
};
