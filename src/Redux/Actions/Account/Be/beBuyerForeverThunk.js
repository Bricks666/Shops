export const beBuyerForever = () => {
  return async (dispatch, getState) => {
    try {
      debugger;
      const state = getState();
      await state.contract.methods
        .RequestToShoperFunc()
        .send({ from: state.user.address });
    } catch (e) {
      console.log(e.message);
    }
  };
};
