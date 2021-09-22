import { Link } from "react-router-dom";
import { LoginButton } from "./FormParts/LoginButton";
import { LoginField } from "./FormParts/LoginField";
import { PasswordField } from "./FormParts/PasswordFiel";

export const Login = (props) => {
  return (
    <>
      <form onSubmit={(evt) => evt.preventDefault()}>
        <LoginField isDisabled={props.isDisabled}>Login</LoginField>
        <PasswordField isDisabled={props.isDisabled}>Password</PasswordField>
        <LoginButton isDisabled={props.isDisabled}>Sing in</LoginButton>
      </form>
      <Link to="/registration">Зарегистрироваться</Link>
    </>
  );
};
