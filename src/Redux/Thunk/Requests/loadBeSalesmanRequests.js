import { toValidRequest } from "../../Service/toValidRequest";
import { setBeBeSalesmanRequests } from "../../Actions/Requests/setBeSalesmanRequests";
import { subscribeNewRequest } from "../Subscribes/subscribeNewRequest";
import { subscribeRequestFinish } from "../Subscribes/subscribeRequestFinish";

export const loadBeSalesmanRequests = () => {
  return async (dispatch, getState) => {
    const state = getState();

    try {
      const requests = (
        await state.contract.methods.getBeSalesmanRequests().call()
      ).map(toValidRequest);

      dispatch(setBeBeSalesmanRequests(requests));

      dispatch(subscribeRequestFinish());
      dispatch(subscribeNewRequest());
    } catch (e) {
      console.log(e.message);
    }
  };
};
