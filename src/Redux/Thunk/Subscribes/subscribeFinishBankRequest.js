import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { finishBankRequest } from "../../Actions/Requests/finishBankRequests";
import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";

export const subscribeFinishBankRequest = (shopId) => {
  return async (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "FinishBankRequest";

    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.RequestFinished(
        { filter: { requestType: "toBank", id: shopId } },
        (error, { returnValues }) => {
          debugger;
          dispatch(finishBankRequest());
        }
      );

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(unsubscribeName));
    }
  };
};
