export const SalesmenItem = (props) => {
  return (
    <li>
      <h4>{props.fio}</h4>
      <p>{props.address}</p>
      {props.children}
    </li>
  );
};
