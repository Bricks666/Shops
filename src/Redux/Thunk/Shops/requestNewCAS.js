import { addNewCAS } from "../../Actions/CAS/addNewCAS";
import { toValidComplainAndSuggestion } from "../../Service/toValidComplainAndSuggestion";

export const requestNewCAS = (address, CASId) => {
  return async (dispatch, getState) => {
    const newCAS = await getState()
      .contract.methods.bookOfComplaintsAndSuggestions(address, CASId)
      .call();

    dispatch(addNewCAS(address, toValidComplainAndSuggestion(newCAS)));
  };
};
