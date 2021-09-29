import { CHANGE_COMMENT_MARK } from "../../ActionsConstants";

export const changeCommentMark = (
  shopAddress,
  CASId,
  commentId,
  changes,
  changer
) => {
  return {
    type: CHANGE_COMMENT_MARK,
    shopAddress,
    CASId,
    commentId,
    changes,
    changer,
  };
};
