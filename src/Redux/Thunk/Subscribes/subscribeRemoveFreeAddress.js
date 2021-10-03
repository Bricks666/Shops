import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { removeFreeAddress } from "../../Actions/FreeAddresses/removeFreeAddress";
import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";

export const subscribeRemoveFreeAddress = () => {
  return (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "RemoveFreeAddress";

    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.RemoveFreeAddress(
        (error, { returnValues }) => {
          dispatch(removeFreeAddress(returnValues.freeAddress));
        }
      );

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(unsubscribeName));
    }
  };
};
