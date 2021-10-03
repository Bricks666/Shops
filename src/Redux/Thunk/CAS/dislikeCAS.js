export const dislikeCAS = (address, CASId) => {
  return async (dispatch, getState) => {
    try {

      await getState()
        .contract.methods.DisikeComplaints(address, CASId)
        .send({ from: getState().user.address });
    } catch (e) {
      console.log(e.message);
    }
  };
};
