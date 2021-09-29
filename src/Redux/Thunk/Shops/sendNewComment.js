export const sendNewComment = (shopAddress, CASId, comment) => {
  return async (dispatch, getState) => {
    try {
      await getState()
        .contract.methods.AddComment(shopAddress, CASId, comment)
        .send({ from: getState().user.address });
    } catch (e) {
      console.log(e.message);
    }
  };
};
