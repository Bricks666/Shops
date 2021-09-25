import { SET_COMPLAINS_AND_SUGGESTIONS } from "../../../ActionsConstants";

export const setBook = (book, address) => {
  return {
    type: SET_COMPLAINS_AND_SUGGESTIONS,
    book,
    address,
  };
};
