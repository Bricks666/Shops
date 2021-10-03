import { loadSalesman } from "../Shops/loadSalesman";
import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";
import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";

export const subscribeNewSalesman = (filters = {}) => {
  return (dispatch, getState) => {
    const contract = getState().contract;
    const subscribeName = "AddSalesman";
    if (notSubscribeEvent(contract.unsubscribeNames, subscribeName)) {
      const subscribe = contract.events.AddSalesman(
        filters,
        (error, { returnValues }) => {
          dispatch(
            loadSalesman(returnValues.salesmanAddress, returnValues.shopId)
          );
        }
      );

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(subscribeName));
    }
  };
};
