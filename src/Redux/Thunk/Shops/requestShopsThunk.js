import { toValidShop } from "../../Service/toValidShop";
import { setShops } from "../../Actions/Shops/Set/setShops";
import { subscribeNewShops } from "../Subscribes/subscribeNewShops";
import { subscribeRemoveShop } from "../Subscribes/subscribeRemoveShop";

export const requestShopsThunk = () => {
  return async (dispatch, getState) => {
    const state = getState();

    const shops = await state.contract.methods.getShops().call();

    dispatch(
      setShops(
        shops
          .filter((shop) => {
            return shop.shopStatus;
          })
          .map(toValidShop)
      )
    );
    dispatch(subscribeNewShops());
    dispatch(subscribeRemoveShop());
  };
};
