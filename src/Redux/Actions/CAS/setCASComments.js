import { SET_COMMENTS } from "../../ActionsConstants";

export const setCASComments = (shopAddress, CASId, comments) => {
  return {
    type: SET_COMMENTS,
    shopAddress,
    CASId,
    comments,
  };
};
