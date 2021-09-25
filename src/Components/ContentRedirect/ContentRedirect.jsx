import { Redirect } from "react-router";

export const ContentRedirect = (props) => {
  return props.role === "3" ? (
    <Redirect from="/" to="/admin" />
  ) : props.role === "2" ? (
    <Redirect from="/" to="/salesman" />
  ) : props.role === "1" ? (
    <Redirect from="/" to="/buyer" />
  ) : (
    ""
  );
};
