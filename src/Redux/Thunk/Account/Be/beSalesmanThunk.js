export const beSalesmanThunk = () => {
  return (dispatch, getState) => {
    getState()
      .contract.methods.BeSalesman()
      .send({ from: getState().user.address });
  };
};
