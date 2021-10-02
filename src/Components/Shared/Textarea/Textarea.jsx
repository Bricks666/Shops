export const Textarea = (props) => {
  return (
    <label>
      {props.children}
      <textarea {...props.input} disabled={props.disabled}></textarea>
    </label>
  );
};
