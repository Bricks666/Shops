import { ABORT_SEND_COMMENT } from "../../ActionsConstants";

export const abortSendComment = () => {
  return {
    type: ABORT_SEND_COMMENT,
  };
};
