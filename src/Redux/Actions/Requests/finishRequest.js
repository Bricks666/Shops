import { FINISH_REQUEST } from "../../ActionsConstants";

export const finishRequest = (requestId, requestType) => {
  return {
    type: FINISH_REQUEST,
    requestType,
    requestId,
  };
};
