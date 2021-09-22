export const likeComment = (CASAddress, complainId) => {
  return (dispatch, getState) => {
    getState()
      .contract.methods.LikeComplaints(CASAddress, complainId)
      .send({ from: getState().user.address });
  };
};
