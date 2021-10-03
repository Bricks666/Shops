import { api } from "../../API/API";

export const sendBankRequest = (shopId) => {
  return async (dispatch) => {
    try {
      await api.sendBankRequest(shopId);
    } catch (e) {
      console.log(e.message);
    }
  };
};
