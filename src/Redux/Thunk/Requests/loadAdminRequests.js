import { toValidRequest } from "../../Service/toValidRequest";
import { setBeAdminRequests } from "../../Actions/Requests/setBeAdminRequests";

export const loadAdminRequests = () => {
  return async (dispatch, getState) => {
    const state = getState();
    try {
      const requests = (
        await state.contract.methods.getBeAdminRequests().call()
      ).map(toValidRequest);
      dispatch(setBeAdminRequests(requests));
    } catch (e) {
      console.log(e.message);
    }
  };
};
