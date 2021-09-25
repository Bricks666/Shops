export const beSalesmanForever = (shopId) => {
  return async (dispatch, geState) => {
    const state = geState();
    ;
    try {
      await state.contract.methods
        .RequestToSalesmanFunc(shopId)
        .send({ from: state.user.address });
    } catch (e) {
      console.log(e.message);
    }
  };
};
