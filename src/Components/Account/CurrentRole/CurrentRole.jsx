export const CurrentRole = (props) => {
  return (
    <p>
      Now you're in role{" "}
      {props.role === "3"
        ? "an admin"
        : props.role === "2"
        ? "a salesman"
        : "a buyer"}
    </p>
  );
};
