import { api } from "../../API/API";
import { setBankRequest } from "../../Actions/Requests/setBankRequest";
import { subscribeFinishBankRequest } from "../Subscribes/subscribeFinishBankRequest";
import { subscribeNewRequest } from "../Subscribes/subscribeNewRequest";

export const requestBankRequest = (shopId) => {
  return async (dispatch) => {
    try {
      const request = await api.getBankRequest(shopId);

      dispatch(setBankRequest(request));
      dispatch(subscribeFinishBankRequest(shopId));
      dispatch(subscribeNewRequest({ requestType: "toBank", id: shopId }));
    } catch (e) {
      console.log(e.message);
    }
  };
};
