import { toValidComplainAndSuggestion } from "../../Service/toValidComplainAndSuggestion";
import { setBook } from "./setBook";

export const requestComplainsAndSuggestions = (address) => {
  return async (dispatch, getState) => {
    const state = getState();

    const novalidBook = await state.contract.methods
      .getShopComplainAndSuggestion(address)
      .call();
    debugger;
    const book = novalidBook.map(toValidComplainAndSuggestion);

    dispatch(setBook(book, address));
  };
};
