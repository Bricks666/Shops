import { SET_ADMIN_REQUESTS } from "../../ActionsConstants";

export const setAdminRequests = (requests) => {
  return {
    type: SET_ADMIN_REQUESTS,
    requests,
  };
};
