import { SET_UNSUBSCRIBE } from "../../../ActionsConstants";

export const setUnsubscribe = (unsubscribe) => {
  return {
    type: SET_UNSUBSCRIBE,
    unsubscribe,
  };
};
