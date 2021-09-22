import { SET_REFRESH_ID } from "../../ActionsConstants";

export const setRefreshId = (id) => {
  return {
    type: SET_REFRESH_ID,
    id,
  };
};
