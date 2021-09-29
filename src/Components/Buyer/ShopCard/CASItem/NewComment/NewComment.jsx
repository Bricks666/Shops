import { Field } from "../../../../Shared/Field/Field";
import { Button } from "../../../../Shared/Button/Button";

export const NewComment = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Новый комментарий</h2>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          props.sendNewComment(props.shopAddress, props.CASId, props.comment);
        }}
      >
        <Field value={props.comment} input={props.input} />
        <Button>Добавить</Button>
      </form>
    </div>
  );
};
