import { connect } from "react-redux";
import { LOGIN } from "../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { Login } from "./Login";

export const LoginConnect = connect(
  mapStateToProps(LOGIN),
  mapDispatchToProps(LOGIN)
)(Login);
