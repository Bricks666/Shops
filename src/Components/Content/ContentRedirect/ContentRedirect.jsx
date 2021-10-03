import { Redirect } from "react-router";

export const ContentRedirect = (props) => {
  switch (props.role) {
    case "-1": {
      return <Redirect exact from="/" to="/guest" />;
    }
    case "1": {
      return <Redirect exact from="/" to="/buyer" />;
    }
    case "2": {
      return <Redirect exact from="/" to="/salesman" />;
    }
    case "3": {
      return <Redirect exact from="/" to="/admin" />;
    }
    case "4": {
      return <Redirect exact from="/" to="/provider" />;
    }
    case "5": {
      return <Redirect exact from="/" to="/bank" />;
    }
    case "6": {
      return <Redirect exact from="/" to="/shop" />;
    }
    default: {
      return "";
    }
  }
};
