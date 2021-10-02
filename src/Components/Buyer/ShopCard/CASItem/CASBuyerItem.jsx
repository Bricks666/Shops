import { LikeButton } from "./Buttons/LikeButton";
import { DislikeButton } from "./Buttons/DislikeButton";
import { CASItemCommentClass } from "../../../Shared/CASItem/CASItemCommentClass";
import { CommentBuyerCardConnect } from "./CommentCard/CommentBuyerCardConnect";

export const CASBuyerItem = (props) => {

  return (
    <CASItemCommentClass
      login={props.login}
      comment={props.comment}
      mark={props.mark}
      likes={props.likes}
      dislikes={props.dislikes}
      CASId={props.id}
      shopAddress={props.address}
      comments={props.comments}
      CommentCard={CommentBuyerCardConnect}
    >
      <LikeButton
        CASId={props.id}
        address={props.address}
        disabled={props.disabled}
      >
        Поставить лайк
      </LikeButton>
      <DislikeButton
        CASId={props.id}
        address={props.address}
        disabled={props.disabled}
      >
        Поставить Дизлайк
      </DislikeButton>
      {props.children}
    </CASItemCommentClass>
  );
};
