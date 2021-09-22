import { startSendComment } from "./startSendComment";
import { endSendComment } from "./endSendComment";
import { abortSendComment } from "./abortSendComment";

export const sendComment = (address) => {
  return async (dispatch, getState) => {
    const state = getState();
    const comment = state.newMessage.comment;
    const mark = state.newMessage.mark;

    dispatch(startSendComment());

    try {
      await state.contract.methods
        .AddComplaints(address, comment, mark)
        .send({ from: state.user.address });

      dispatch(endSendComment());
    } catch (e) {
      dispatch(abortSendComment());
    }
  };
};
