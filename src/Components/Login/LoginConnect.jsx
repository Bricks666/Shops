import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm } from "redux-form";
import { LOGIN } from "../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { Login } from "./Login";

export const LoginConnect = compose(
  connect(null, mapDispatchToProps(LOGIN)),
  reduxForm({ form: "login", initialValues: { login: "", password: "" } })
)(Login);
