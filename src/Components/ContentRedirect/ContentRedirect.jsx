import { Redirect } from "react-router";

export const ContentRedirect = (props) => {
  return props.role === "3" ? (
    <Redirect exact from="/" to="/admin" />
  ) : props.role === "2" ? (
    <Redirect exact from="/" to="/salesman" />
  ) : props.role === "1" ? (
    <Redirect exact from="/" to="/buyer" />
  ) : (
    ""
  );
};
