import { Field as ReduxField } from "redux-form";
import { Field } from "../../Field/Field";
import { Textarea } from "../../Textarea/Textarea";
import { Button } from "../../Button/Button";

export const NewCAS = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <ReduxField
        name="CAS"
        component={Textarea}
        required={true}
        disabled={props.submitting}
      >
        Ваше сообщение
      </ReduxField>
      <ReduxField
        name="mark"
        component={Field}
        type="range"
        min={0}
        max={10}
        step={1}
        disabled={props.submitting}
      >
        Ваша оценка
      </ReduxField>
      <Button disabled={props.submitting || props.dirty === false}>
        Отправить отзыв
      </Button>
    </form>
  );
};
