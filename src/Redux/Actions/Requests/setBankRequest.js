import { SET_BANK_REQUESTS } from "../../ActionsConstants";

export const setBankRequest = (request) => {
  return {
    type: SET_BANK_REQUESTS,
    request,
  };
};
