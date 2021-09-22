import { connect } from "react-redux";
import { LOGIN_PASSWORD } from "../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Field } from "../../Shared/Field/Field";

export const PasswordField = connect(
  mapStateToProps(LOGIN_PASSWORD),
  mapDispatchToProps(LOGIN_PASSWORD)
)(Field);
