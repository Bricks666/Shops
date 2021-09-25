import { ADD_UNSUBSCRIBE_NAMES } from "../../../ActionsConstants";

export const addUnsubscribeNames = (unsubscribeNames) => {
  return {
    type: ADD_UNSUBSCRIBE_NAMES,
    unsubscribeNames,
  };
};
