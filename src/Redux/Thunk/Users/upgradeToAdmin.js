export const upgradeToAdmin = (userAddress) => {
  return async (dispatch, getState) => {

    try {
      await getState()
        .contract.methods.upgradeToAdmin(userAddress)
        .send({ from: getState().user.address });
    } catch (e) {
      console.log(e.message);
    }
  };
};
