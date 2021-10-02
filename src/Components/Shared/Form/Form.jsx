export const Form = (props) => {

  return (
    <form onSubmit={props.onSubmit}>
      {props.error !== undefined ? <p>{props.error}</p> : ""}
      {props.children}
    </form>
  );
};
