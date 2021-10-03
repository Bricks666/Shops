import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";
import { addFreeAddress } from "../../Actions/FreeAddresses/addFreeAddress";
import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { toValidFreeAddress } from "../../Service/toValidFreeAddress";

export const subscribeNewFreeAddress = () => {
  return (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "NewFreeAddress";

    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.AddFreeAddress(
        (error, { returnValues }) => {

          dispatch(
            addFreeAddress(
              toValidFreeAddress(returnValues.freeAddress, returnValues.index)
            )
          );
        }
      );

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(unsubscribeName));
    }
  };
};
