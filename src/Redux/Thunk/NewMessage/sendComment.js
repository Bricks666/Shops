import { startSendComment } from "../../Actions/NewMessage/startSendComment";
import { endSendComment } from "../../Actions/NewMessage/endSendComment";
import { abortSendComment } from "../../Actions/NewMessage/abortSendComment";

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
