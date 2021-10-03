import { Loading } from "./Loading";

export const addLoading = (Component) => {
  return (props) => {
    return props.isLoading ? <Loading /> : <Component {...props} />;
  };
};
