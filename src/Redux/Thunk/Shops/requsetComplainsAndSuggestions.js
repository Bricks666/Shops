import { toValidComplainAndSuggestion } from "../../Service/toValidComplainAndSuggestion";
import { setBook } from "../../Actions/CAS/setBook";
import { subscribeChangeCASMark } from "../Subscribes/subscribeChangeCASMark";
import { subscribeNewCAS } from "../Subscribes/subscribeNewCAS";

export const requestComplainsAndSuggestions = (address) => {
  return async (dispatch, getState) => {
    const state = getState();

    const novalidBook = await state.contract.methods
      .getShopComplainAndSuggestion(address)
      .call();

    const book = novalidBook.map(toValidComplainAndSuggestion);

    dispatch(setBook(book, address));
    dispatch(subscribeNewCAS());
    dispatch(subscribeChangeCASMark());
  };
};
