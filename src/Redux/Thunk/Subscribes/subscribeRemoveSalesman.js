import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";
import { removeSalesman } from "../../Actions/Shops/Remove/removeSalesman";

export const subscribeRemoveSalesman = () => {
  return (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "RemoveSalesman";

    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.RemoveSalesman(
        (error, { returnValues }) => {
          dispatch(
            removeSalesman(returnValues.salesmanAddress, returnValues.shopId)
          );
        }
      );

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(unsubscribeName));
    }
  };
};
