import { toValidRequest } from "../../Service/toValidRequest";
import { setBeBuyerRequests } from "../../Actions/Requests/setBeBuyerRequests";
import { subscribeNewRequest } from "../Subscribes/subscribeNewRequest";
import { subscribeRequestFinish } from "../Subscribes/subscribeRequestFinish";

export const loadBeBuyerRequests = () => {
  return async (dispatch, getState) => {
    const state = getState();

    try {
      const requests = (
        await state.contract.methods.getBeBuyerRequests().call()
      ).map(toValidRequest);

      dispatch(setBeBuyerRequests(requests));

      dispatch(subscribeRequestFinish());
      dispatch(subscribeNewRequest());
    } catch (e) {
      console.log(e.message);
    }
  };
};
