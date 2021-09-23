export const cancelBuyerRequest = (requestId) => {
  return async (dispatch, getState) => {
    try {
      await getState()
        .contract.methods.CancelRequestShoper(requestId)
        .send({ from: getState().user.address });
    } catch (e) {
      console.log(e.message);
    }
  };
};
