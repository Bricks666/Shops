import { Buttons } from "./Buttons/Buttons";

const getStringRole = (role) => {
  switch (role) {
    case "1": {
      return "Buyer";
    }
    case "2": {
      return "Salesman";
    }
    case "3": {
      return "Admin";
    }
    default: {
      return "";
    }
  }
};

export const UsersCard = (props) => {
  return (
    <li>
      <h4>{props.address}</h4>
      <p>{getStringRole(props.role)}</p>
      <Buttons isSalesman={props.isSalesman} isAdmin={props.isAdmin} userAddress={props.address}/>
    </li>
  );
};
