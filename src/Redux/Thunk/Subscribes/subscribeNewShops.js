import { notSubscribeEvent } from "../../Service/notSubscribeEvent";
import { requestNewShop } from "./../Shops/requestNewShop";
import { removeUser } from "../../Actions/Users/removeUser";
import { addUnsubscribe } from "../../Actions/Contract/Add/addUnsubscribe";
import { addUnsubscribeNames } from "../../Actions/Contract/Add/addUnsubscribeNames";

export const subscribeNewShops = () => {
  return async (dispatch, getState) => {
    const contract = getState().contract;
    const unsubscribeName = "AddShop";

    if (notSubscribeEvent(contract.unsubscribeNames, unsubscribeName)) {
      const subscribe = contract.events.AddShopEvent(
        (error, { returnValues }) => {
          dispatch(requestNewShop(returnValues.shopId));
          dispatch(removeUser(returnValues.shopNewAddress));
        }
      );

      dispatch(addUnsubscribe(subscribe));
      dispatch(addUnsubscribeNames(unsubscribeName));
    }
  };
};
