import { ADD_REQUEST } from "../../ActionsConstants";

export const addRequest = (request, requestType) => {

  return {
    type: ADD_REQUEST,
    request,
    requestType,
  };
};
