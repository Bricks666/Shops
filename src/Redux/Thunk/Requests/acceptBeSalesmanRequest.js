export const acceptBeSalesmanRequest = (requestId) => {
  return async (dispatch, getState) => {
    try {
      await getState()
        .contract.methods.AccRequestSalesman(requestId)
        .send({ from: getState().user.address });
    } catch (e) {
      console.log(e.message);
    }
  };
};
