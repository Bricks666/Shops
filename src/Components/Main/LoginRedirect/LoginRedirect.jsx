import { Redirect } from "react-router";

export const LoginRedirect = (props) => {
  return (
    <>
      {props.isReg ? <Redirect from="/registration" to="/login" /> : ""}
      {props.isLogin ? (
        <Redirect from="/login" to="/" />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};
