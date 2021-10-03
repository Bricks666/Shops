import { toValidShop } from "../../Service/toValidShop";
import { addNewShop } from "../../Actions/Shops/Add/addNewShop";
import { api } from "../../API/API";

export const requestNewShop = (shopId) => {
  return async (dispatch) => {
    try {
      const shop = await api.getShop(shopId);

      dispatch(addNewShop(toValidShop(shop)));
    } catch (e) {
      console.log(e.message);
    }
  };
};
