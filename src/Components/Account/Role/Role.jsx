export const Role = (props) => {
  return (
    <p>
      You're {props.isAdmin ? "Admin" : props.isSalesman ? "Salesman" : "Buyer"}
    </p>
  );
};
