export const cancelBeSalesmanRequest = (requestId) => {
  return async (dispatch, getState) => {
    try {
      await getState()
        .contract.methods.CancelRequestSalesman(requestId)
        .send({ from: getState().user.address });
    } catch (e) {
      console.log(e.message);
    }
  };
};
