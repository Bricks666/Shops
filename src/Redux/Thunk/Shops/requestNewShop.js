import { toValidShop } from "../../Service/toValidShop";
import { addNewShop } from "../../Actions/Shops/Add/addNewShop";

export const requestNewShop = (shopId) => {
  return async (dispatch, getState) => {
    try {
      const shop = await getState().contract.methods.shop(shopId).call();

      dispatch(addNewShop(toValidShop(shop)));
    } catch (e) {
      console.log(e.message);
    }
  };
};
