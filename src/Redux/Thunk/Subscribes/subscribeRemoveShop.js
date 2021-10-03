import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";
import { removeShop } from "../../Actions/Shops/Remove/removeShop";

export const subscribeRemoveShop = () => {
  return (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "RemoveShop";

    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.RemoveShop(
        (error, { returnValues }) => {

          dispatch(removeShop(returnValues.shopAddress));
        }
      );

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(unsubscribeName));
    }
  };
};
