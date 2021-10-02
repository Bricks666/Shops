import { Button } from "../../Button/Button";
import { Field as ReduxField } from "redux-form";
import { Textarea } from "../../Textarea/Textarea";

export const NewComment = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <ReduxField
        name="newComment"
        component={Textarea}
        disabled={props.submitting}
      >
        Ваш комментарий
      </ReduxField>
      <Button disabled={props.dirty === false || props.submitting}>
        Добавить
      </Button>
    </form>
  );
};
