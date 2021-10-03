import { connect } from "react-redux";
import { LOGIN_REDIRECT } from "../../../Redux/ComponentConstants";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { LoginRedirect } from "./LoginRedirect";

export const LoginRedirectConnect = connect(mapStateToProps(LOGIN_REDIRECT))(
  LoginRedirect
);
