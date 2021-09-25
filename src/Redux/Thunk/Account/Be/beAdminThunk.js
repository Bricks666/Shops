export const beAdminThunk = () => {
  return (dispatch, getState) => {
    getState()
      .contract.methods.BeAdmin()
      .send({ from: getState().user.address });
  };
};
