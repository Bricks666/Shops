export const Button = (props) => {
  return (
    <button
      type={props.type ?? "submit"}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
