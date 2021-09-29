import { Comment } from "../../../../Shared/Comment/Comment";
import { LikeButton } from "./Buttons/LikeButton";
import { DislikeButton } from "./Buttons/DislikeButton";

export const CommentBuyerCard = (props) => {
  return (
    <Comment
      login={props.login}
      comment={props.content}
      likes={props.likes}
      dislikes={props.dislikes}
    >
      <LikeButton
        shopAddress={props.shopAddress}
        CASId={props.CASId}
        commentId={props.id}
        disabled={props.disabled}
      >
        Поставить лайк
      </LikeButton>
      <DislikeButton
        shopAddress={props.shopAddress}
        CASId={props.CASId}
        commentId={props.id}
        disabled={props.disabled}
      >
        Поставить дизлайк
      </DislikeButton>
    </Comment>
  );
};
