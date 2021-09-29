import { CommentFieldConnect } from "./FieldParts/CommentField";
import { MarkFieldConnect } from "./FieldParts/MarkField";
import { SendCommentButton } from "./FieldParts/SendCommentButton";

export const NewCAS = (props) => {
  return (
    <form>
      <CommentFieldConnect disabled={props.isDisabled} />
      <MarkFieldConnect disabled={props.isDisabled} />
      <SendCommentButton disabled={props.isDisabled} address={props.address}>
        Отправить комментарий
      </SendCommentButton>
    </form>
  );
};
