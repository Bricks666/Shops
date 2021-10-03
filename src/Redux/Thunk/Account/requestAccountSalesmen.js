import { api } from "../../API/API";
import { setSalesmenShopsAccount } from "../../Actions/Account/setSalesmenShopsAccount";
import { subscribeNewSalesman } from "../Subscribes/subscribeNewSalesman";
import { subscribeRemoveSalesman } from "../Subscribes/subscribeRemoveSalesman";
import { toValidSalesman } from "../../Service/toValidSalesman";

export const requestAccountSalesmen = (shopId) => {
  return async (dispatch) => {
    try {
      const salesmen = await api.getShopSalesmen(shopId);

      dispatch(setSalesmenShopsAccount(salesmen.map(toValidSalesman)));

      dispatch(subscribeNewSalesman({ filter: { shopId: shopId } }));
      dispatch(subscribeRemoveSalesman({ filter: { shopId: shopId } }));
    } catch (e) {
      console.log(e.message);
    }
  };
};
