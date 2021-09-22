export const dislikeComment = (address, CASId) => {
  return (dispatch, getState) => {
    getState()
      .contract.methods.DisikeComplaints(address, CASId)
      .send({ from: getState().user.address });
  };
};
