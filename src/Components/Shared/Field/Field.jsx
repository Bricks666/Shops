export const Field = (props) => {
  return (
    <label>
      {props.children}
      <input
        type={props.type ?? "text"}
        value={props.value ?? ""}
        required={props.required}
        onChange={props.input}
      />
    </label>
  );
};
