const renderOption = (values, names) => {
  return values.map((value, index) => {
    return (
      <option value={value} key={value}>
        {names[index]}
      </option>
    );
  });
};

export const Selector = (props) => {
  return (
    <label>
      {props.children}
      <select
        {...props.input}
        disabled={props.disabled}
        required={props.required}
      >
        {renderOption(props.values, props.names)}
      </select>
    </label>
  );
};
