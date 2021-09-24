import { addSalesman } from "./addSalesman";

export const loadSalesman = (salesmanAddress, shopId) => {
  return async (dispatch, getState) => {
    try {
      const salesman = await getState()
        .contract.methods.user(salesmanAddress)
        .call();

      dispatch(addSalesman(salesman, shopId));
    } catch (e) {
      console.log(e.message);
    }
  };
};
