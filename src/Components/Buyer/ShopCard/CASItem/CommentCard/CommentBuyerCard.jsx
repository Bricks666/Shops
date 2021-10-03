import { Comment } from "../../../../Shared/Comment/Comment";

export const CommentBuyerCard = (props) => {
  return (
    <Comment
      login={props.login}
      content={props.content}
      likes={props.likes}
      dislikes={props.dislikes}
    >
      {props.children}
    </Comment>
  );
};
