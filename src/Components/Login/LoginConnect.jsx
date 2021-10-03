import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm } from "redux-form";
import { LOGIN } from "../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { Login } from "./Login";
import { addLoading } from "../Shared/Loading/addLoading";

export const LoginConnect = compose(
  connect(mapStateToProps(LOGIN), mapDispatchToProps(LOGIN)),
  addLoading,
  reduxForm({ form: "login", initialValues: { login: "", password: "" } })
)(Login);
