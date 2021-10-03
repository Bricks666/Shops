import { setShopAccountInfo } from "../../Actions/Account/setShopAccountInfo";
import { api } from "../../API/API";
import { toValidShopAccount } from "../../Service/toValidShopAccount";
import { requestAccountSalesmen } from "./requestAccountSalesmen";

export const requestShopAccountInfo = (accountAddress) => {
  return async (dispatch) => {
    try {
      const shop = (await api.getShops()).filter(
        (shop) => shop.shopAddress === accountAddress
      );

      dispatch(setShopAccountInfo(toValidShopAccount(...shop)));
      dispatch(requestAccountSalesmen(shop[0].shopId));
    } catch (e) {
      console.log(e.message);
    }
  };
};
