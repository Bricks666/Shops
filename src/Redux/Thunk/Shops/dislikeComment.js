export const dislikeComment = (shopAddress, CASId, commentId) => {
  return async (dispatch, getState) => {
    try {

      await getState()
        .contract.methods.DisikeComment(shopAddress, CASId, commentId)
        .send({ from: getState().user.address });
    } catch (e) {
      console.log(e.message);
    }
  };
};
