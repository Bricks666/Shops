import { DislikeButton } from "./DislikeButton";
import { LikeButton } from "./LikeButton";

export const CASItem = (props) => {
  return (
    <article>
      <h5>{props.login}</h5>
      <p>{props.comment}</p>
      <LikeButton
        CASId={props.id}
        address={props.address}
        disabled={props.disabled}
      >
        Поставить лайк
      </LikeButton>
      <span>{props.mark}</span>
      <DislikeButton
        CASId={props.id}
        address={props.address}
        disabled={props.disabled}
      >
        Поставить Дизлайк
      </DislikeButton>
    </article>
  );
};
