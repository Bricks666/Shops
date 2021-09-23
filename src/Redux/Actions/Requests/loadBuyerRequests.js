import { toValidRequest } from "../../Service/toValidRequest";
import { setBuyerRequests } from "./setBuyerRequests";

export const loadBuyerRequests = () => {
  return async (dispatch, getState) => {
    const state = getState();

    try {
      const requests = (
        await state.contract.methods.getBeBuyerRequests().call()
      ).map(toValidRequest);

      dispatch(setBuyerRequests(requests));
    } catch (e) {
      console.log(e.message);
    }
  };
};
