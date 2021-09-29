export const likeComment = (shopAddress, CASId, commentId) => {
  return async (dispatch, getState) => {
    try {
      await getState()
        .contract.methods.LikeComment(shopAddress, CASId, commentId)
        .send({ from: getState().user.address });
    } catch (e) {
      console.log(e.message);
    }
  };
};
