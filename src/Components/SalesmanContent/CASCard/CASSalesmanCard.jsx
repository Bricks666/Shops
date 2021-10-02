import { CASItemCommentClass } from "../../Shared/CASItem/CASItemCommentClass";
import { withCommentCreate } from "../../Shared/HOC's/withCommentCreate";
import { Comment } from "../../Shared/Comment/Comment";

const CASWithCommentCard = (props) => {
  return <CASItemCommentClass {...props} CommentCard={Comment} />;
};

export const CASSalesmanCard = withCommentCreate(CASWithCommentCard);
