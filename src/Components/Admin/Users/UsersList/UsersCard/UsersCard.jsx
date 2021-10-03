import { Buttons } from "./Buttons/Buttons";

const getRoleName = (role) => {
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
      <h4>{props.fio}</h4>
      <p>{props.address}</p>
      <p>Текущая роль пользователя: {getRoleName(props.role)}</p>
      <Buttons
        isSalesman={props.isSalesman}
        isAdmin={props.isAdmin}
        userAddress={props.address}
      />
    </li>
  );
};
