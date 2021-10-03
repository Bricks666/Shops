import LoadingStyle from "./Loading.module.css";

export const Loading = (props) => {
  return (
    <div className={LoadingStyle.wrapper}>
      <div className={LoadingStyle.loading}></div>
    </div>
  );
};
