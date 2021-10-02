import { Link } from "react-router-dom";
import { Field as ReduxField } from "redux-form";
import { Field } from "../Shared/Field/Field";
import { Button } from "../Shared/Button/Button";
import { Form } from "../Shared/Form/Form";
import { GuestEnter } from "./GuestEnter";

export const Login = (props) => {
  return (
    <>
      <Form onSubmit={props.handleSubmit} error={props.error}>
        <ReduxField
          name="login"
          component={Field}
          required={true}
          disabled={props.submitting}
        >
          Login
        </ReduxField>
        <ReduxField
          name="password"
          component={Field}
          type={"password"}
          required={true}
          disabled={props.submitting}
        >
          Password
        </ReduxField>
        <Button disabled={props.submitting || !props.dirty}>Sing in</Button>
      </Form>
      <GuestEnter>Войти как гость</GuestEnter>
      <Link to="/registration">Зарегистрироваться</Link>
    </>
  );
};
