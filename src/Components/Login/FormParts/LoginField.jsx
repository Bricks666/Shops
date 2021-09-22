import { connect } from "react-redux";
import { LOGIN_LOGIN } from "../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Field } from "../../Shared/Field/Field";

export const LoginField = connect(
  mapStateToProps(LOGIN_LOGIN),
  mapDispatchToProps(LOGIN_LOGIN)
)(Field);
