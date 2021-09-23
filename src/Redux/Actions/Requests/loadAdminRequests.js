import { toValidRequest } from "../../Service/toValidRequest";
import { setAdminRequests } from "./setAdminRequests";

export const loadAdminRequests = () => {
  return async (dispatch, getState) => {
    const state = getState();
    try {
      const requests = (
        await state.contract.methods.getBeAdminRequests().call()
      ).map(toValidRequest);
      dispatch(setAdminRequests(requests));
    } catch (e) {
      console.log(e.message);
    }
  };
};
