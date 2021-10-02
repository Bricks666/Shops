import { connect } from "react-redux";
import { Registration } from "./Registration";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { REGISTRATION } from "../../Redux/ComponentConstants";
import { reduxForm } from "redux-form";

export const RegistrationConnect = connect(
  null,
  mapDispatchToProps(REGISTRATION)
)(
  reduxForm({
    form: "registration",
    initialValues: { fio: "", login: "", password: "" },
  })(Registration)
);
