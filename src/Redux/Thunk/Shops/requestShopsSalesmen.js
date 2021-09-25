import { setSalesmen } from "../../Actions/Shops/Set/setSalesmen";
import { subscribeNewSalesman } from "../Subscribes/subscribeNewSalesman";
import { subscribeRemoveSalesman } from "../Subscribes/subscribeRemoveSalesman";

export const requestShopsSalesmen = (shopId) => {
  return async (dispatch, getState) => {
    const state = getState();
    const salesmenAddresses = await state.contract.methods
      .ShowSalesmanOfStore(+shopId)
      .call();

    const salesmen = [];

    for (let address of salesmenAddresses) {
      salesmen.push(state.contract.methods.user(address).call());
    }
    dispatch(
      setSalesmen(
        shopId,
        (await Promise.all(salesmen)).filter(
          (salesman) => salesman.role !== "0"
        )
      )
    );

    dispatch(subscribeNewSalesman());
    dispatch(subscribeRemoveSalesman());
  };
};
