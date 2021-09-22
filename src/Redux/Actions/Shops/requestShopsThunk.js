import { setShops } from "./setShops";

export const requestShopsThunk = () => {
  return async (dispatch, getState) => {
    const state = getState();

    const shopsAddresses = await state.contract.methods
      .getShopsAddress()
      .call();

    let shops = [];

    for (let i = 0; i < shopsAddresses.length; i++) {
      shops.push(await state.contract.methods.shop(i).call());
    }

    dispatch(setShops(shops));
  };
};
