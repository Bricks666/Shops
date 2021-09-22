import { BeAdminButton } from "./Buttons/BeAdminButton";
import { BeBuyerButton } from "./Buttons/BeBuyerButton";
import { BeSalesmanButton } from "./Buttons/BeSalesmanButton";

export const Account = (props) => {
  return (
    <article>
      <h2>Your login: {props.user.login}</h2>
      <p>Your balance: {props.user.balance} ETH</p>
      <p>
        You're{" "}
        {props.user.isAdmin
          ? "Admin"
          : props.user.isSalesman
          ? "Salesman"
          : "Buyer"}
      </p>
      <p>
        Now you're in role{" "}
        {props.user.role === "3"
          ? "an admin"
          : props.user.role === "2"
          ? "a salesman"
          : "a buyer"}
      </p>
      {props.user.isSalesman || props.user.isAdmin ? (
        <div>
          <BeBuyerButton>Be Buyer</BeBuyerButton>
          {props.user.isSalesman ? (
            <BeSalesmanButton>Be Salesman</BeSalesmanButton>
          ) : (
            ""
          )}
          {props.user.isAdmin ? <BeAdminButton>Be Admin</BeAdminButton> : ""}
        </div>
      ) : (
        ""
      )}
    </article>
  );
};
