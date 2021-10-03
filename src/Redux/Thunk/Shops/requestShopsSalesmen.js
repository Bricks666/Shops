import { setSalesmen } from "../../Actions/Shops/Set/setSalesmen";
import { subscribeNewSalesman } from "../Subscribes/subscribeNewSalesman";
import { subscribeRemoveSalesman } from "../Subscribes/subscribeRemoveSalesman";
import { api } from "../../API/API";

export const requestShopsSalesmen = (shopId) => {
  return async (dispatch) => {

    const salesmen = await api.getShopSalesmen(shopId);

    dispatch(setSalesmen(shopId, salesmen));

    dispatch(subscribeNewSalesman());
    dispatch(subscribeRemoveSalesman());
  };
};
