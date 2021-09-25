import { BE_SET_BUYER_REQUESTS } from "../../ActionsConstants";

export const setBeBuyerRequests = (requests) => {
  return {
    type: BE_SET_BUYER_REQUESTS,
    requests,
  };
};
