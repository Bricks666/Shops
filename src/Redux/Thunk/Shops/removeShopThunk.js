export const removeShopThunk = (shopId) => {
  return async (dispatch, getState) => {
    try {

      await getState()
        .contract.methods.DeleteShop(shopId)
        .send({ from: getState().user.address });
    } catch (e) {
      console.log(e.message);
    }
  };
};
