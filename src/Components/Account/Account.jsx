import { Link } from "react-router-dom";
import { Buttons } from "./Buttons/Buttons";
import { CurrentRole } from "./CurrentRole/CurrentRole";
import { Role } from "./Role/Role";

export const Account = (props) => {
  if (+props.user.role === 0) {
    return <Link to="/registration">Зарегистрироваться</Link>;
  }

  return (
    <article>
      <h2>Your login: {props.user.login}</h2>
      <p>Your balance: {props.user.balance} ETH</p>
      <p>Your name is {props.user.fio}</p>
      <Role isAdmin={props.user.isAdmin} isSalesman={props.user.isSalesman} />
      <CurrentRole role={props.user.role} />
      <Buttons
        isAdmin={props.user.isAdmin}
        isSalesman={props.user.isSalesman}
      />
    </article>
  );
};
