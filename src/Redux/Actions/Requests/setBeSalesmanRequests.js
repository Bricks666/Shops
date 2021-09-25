import { BE_SET_SALESMAN_REQUESTS } from "../../ActionsConstants";

export const setBeBeSalesmanRequests = (requests) => {
  return {
    type: BE_SET_SALESMAN_REQUESTS,
    requests,
  };
};
