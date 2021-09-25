import { BE_SET_ADMIN_REQUESTS } from "../../ActionsConstants";

export const setBeAdminRequests = (requests) => {
  return {
    type: BE_SET_ADMIN_REQUESTS,
    requests,
  };
};
