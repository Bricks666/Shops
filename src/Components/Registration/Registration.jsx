import { Field as ReduxField } from "redux-form";
import { Field } from "../Shared/Field/Field";
import { Button } from "../Shared/Button/Button";
import { Form } from "../Shared/Form/Form";
import { Link } from "react-router-dom";

export const Registration = (props) => {
  return (
    <>
      <Form onSubmit={props.handleSubmit} error={props.error}>
        <ReduxField
          name="fio"
          component={Field}
          disabled={props.submitting}
          required={true}
        >
          ФИО
        </ReduxField>
        <ReduxField
          name="login"
          component={Field}
          disabled={props.submitting}
          required={true}
        >
          Логин
        </ReduxField>
        <ReduxField
          name="password"
          type="password"
          component={Field}
          disabled={props.submitting}
          required={true}
        >
          Пароль
        </ReduxField>
        <Button disabled={props.submitting || !props.dirty}>
          Зарегистрироваться
        </Button>
      </Form>
      <Link to="/login">Войти</Link>
    </>
  );
};
