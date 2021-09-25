export const likeComment = (CASAddress, complainId) => {
  return async (dispatch, getState) => {
    try {
      await getState()
        .contract.methods.LikeComplaints(CASAddress, complainId)
        .send({ from: getState().user.address });
    } catch (e) {
      console.log(e.message);
    }
  };
};
