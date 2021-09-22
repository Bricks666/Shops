export const beBuyerThunk = () => {
  return (dispatch, getState) => {
    getState()
      .contract.methods.BeShoper()
      .send({ from: getState().user.address });
  };
};
