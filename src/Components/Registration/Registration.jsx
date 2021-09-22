import { FIOField } from "./FormParts/FIOField";
import { LoginField } from "./FormParts/LoginField";
import { PasswordField } from "./FormParts/PasswordField";
import { RegButton } from "./FormParts/RegButton";

export const Registration = (props) => {
  return (
    <form>
      <FIOField disabled={props.isDisabled} />
      <LoginField disabled={props.isDisabled} />
      <PasswordField disabled={props.isDisabled} />
      <RegButton disabled={props.isDisabled}>Зарегистрироваться</RegButton>
    </form>
  );
};
