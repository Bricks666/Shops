import { connect } from "react-redux";
import { Registration } from "./Registration";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { REGISTRATION } from "../../Redux/ComponentConstants";
import { reduxForm } from "redux-form";

const validate = (values) => {
  const errors = {};

  if (values.password?.length < 5) {
    errors.password = "Пароль слишком короткий";
  }

  return errors;
};

export const RegistrationConnect = connect(
  null,
  mapDispatchToProps(REGISTRATION)
)(
  reduxForm({
    form: "registration",
    initialValues: { fio: "", login: "", password: "" },
    validate,
  })(Registration)
);
