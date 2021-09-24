import { setSalesmen } from "./setSalesmen";

export const requestShopsSalesmen = (shopId) => {
  return async (dispatch, getState) => {
    const state = getState();
    const salesmenAddresses = await state.contract.methods
      .ShowSalesmanOfStore(+shopId)
      .call();

    const salesmen = [];

    for (let address of salesmenAddresses) {
      salesmen.push(await state.contract.methods.user(address).call());
    }
    dispatch(
      setSalesmen(
        shopId,
        salesmen.filter((salesman) => salesman.role !== "0")
      )
    );
  };
};
