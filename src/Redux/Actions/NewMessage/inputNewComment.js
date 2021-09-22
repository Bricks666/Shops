import { INPUT_NEW_COMMENT } from "../../ActionsConstants";

export const inputNewComment = (comment) => {
  return {
    type: INPUT_NEW_COMMENT,
    comment,
  };
};
