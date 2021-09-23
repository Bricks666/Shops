import { SET_BUYER_REQUESTS } from "../../ActionsConstants";

export const setBuyerRequests = (requests) => {
  return {
    type: SET_BUYER_REQUESTS,
    requests,
  };
};
