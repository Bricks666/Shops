export const acceptBeBuyerRequest = (requestId) => {
  return async (dispatch, getState) => {
    try {
      await getState()
        .contract.methods.AccRequestShoper(requestId)
        .send({ from: getState().user.address });
    } catch (e) {
      console.log(e.message);
    }
  };
};
