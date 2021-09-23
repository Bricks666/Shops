import { DislikeButton } from "./DislikeButton";
import { LikeButton } from "./LikeButton";

export const CASItem = (props) => {
  return (
    <article>
      <p>
        <span>Номер {props.id}</span>
        {props.comment}
      </p>
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
