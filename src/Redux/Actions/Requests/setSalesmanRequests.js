import { SET_SALESMAN_REQUESTS } from "../../ActionsConstants";

export const setSalesmanRequests = (requests) => {
  return {
    type: SET_SALESMAN_REQUESTS,
    requests,
  };
};
