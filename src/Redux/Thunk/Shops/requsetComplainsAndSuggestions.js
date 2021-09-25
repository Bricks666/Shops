import { toValidComplainAndSuggestion } from "../../Service/toValidComplainAndSuggestion";
import { setBook } from "../../Actions/Shops/Set/setBook";
import { subscribeChangeMark } from "../Subscribes/subscribeChangeMark";
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
    dispatch(subscribeChangeMark());
  };
};
