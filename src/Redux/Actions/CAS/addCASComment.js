import { ADD_COMMENT } from "../../ActionsConstants";

export const addCASComment = (shopAddress, CASId, comment) => {
  return {
    type: ADD_COMMENT,
    shopAddress,
    CASId,
    comment,
  };
};
