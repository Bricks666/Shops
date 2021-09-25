export const setShopThunk = (userAddress) => {
  return async (dispatch, getState) => {
    try {
      await getState()
        .contract.methods.AddShop(userAddress, "Kaluga")
        .send({ from: getState().user.address });
    } catch (e) {
      console.log(e.message);
    }
  };
};
