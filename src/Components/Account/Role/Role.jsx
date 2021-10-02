export const Role = (props) => {
  return props.isAdmin || props.isSalesman ? (
    <p>You're {props.isAdmin ? "Admin" : "Salesman"}</p>
  ) : (
    ""
  );
};
