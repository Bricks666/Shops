import { DislikeButton } from "./Buttons/DislikeButton";
import { LikeButton } from "./Buttons/LikeButton";

export const commentWithLikeAndDislike = (Component) => {
  return (props) => {
    return (
      <Component {...props}>
        <LikeButton
          shopAddress={props.shopAddress}
          CASId={props.CASId}
          commentId={props.id}
          disabled={props.disabled}
        >
          Поставить лайк
        </LikeButton>{" "}
        <DislikeButton
          shopAddress={props.shopAddress}
          CASId={props.CASId}
          commentId={props.id}
          disabled={props.disabled}
        >
          Поставить дизлайк
        </DislikeButton>
      </Component>
    );
  };
};
