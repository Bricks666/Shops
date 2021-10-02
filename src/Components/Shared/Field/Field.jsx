export const Field = (props) => {
  return (
    <label>
      {props.children}
      <input
        {...props.input}
        required={props.required}
        type={props.type}
        disabled={props.disabled}
        min={props.min}
        max={props.max}
        step={props.step}
      />
      {props.meta.error !== undefined ? <span>{props.meta.error}</span> : ""}{" "}
    </label>
  );
};
