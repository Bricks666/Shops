import { Comment } from "../../../../Shared/Comment/Comment";

export const CommentBuyerCard = (props) => {
  return (
    <Comment
      login={props.login}
      comment={props.content}
      likes={props.likes}
      dislikes={props.dislikes}
    >
      {props.children}
    </Comment>
  );
};
