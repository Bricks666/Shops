import { SET_COMPLAINS_AND_SUGGESTIONS } from "../../ActionsConstants";

export const setBook = (book, address, shopId, isSalesman) => {
  return {
    type: SET_COMPLAINS_AND_SUGGESTIONS,
    book,
    address,
    shopId,
    isSalesman: isSalesman ?? false,
  };
};
