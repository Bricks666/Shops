import { ADD_UNSUBSCRIBE } from "../../../ActionsConstants";

export const addUnsubscribe = (...unsubscribes) => {
  return {
    type: ADD_UNSUBSCRIBE,
    unsubscribes,
  };
};
