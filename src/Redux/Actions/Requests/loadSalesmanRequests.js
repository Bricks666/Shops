import { toValidRequest } from "../../Service/toValidRequest";
import { setSalesmanRequests } from "./setSalesmanRequests";

export const loadSalesmanRequests = () => {
  return async (dispatch, getState) => {
    const state = getState();

    try {
      const requests = (
        await state.contract.methods.getBeSalesmanRequests().call()
      ).map(toValidRequest);

      dispatch(setSalesmanRequests(requests));
    } catch (e) {
      console.log(e.message);
    }
  };
};
