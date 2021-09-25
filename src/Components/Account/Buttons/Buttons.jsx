import { BeAdminButton } from "./BeAdminButton";
import { BeBuyerButton } from "./BeBuyerButton";
import { BeSalesmanButton } from "./BeSalesmanButton";
import { BeBuyerForever } from "./BeBuyerForever";

export const Buttons = (props) => {
  return props.isSalesman || props.isAdmin ? (
    <div>
      <BeBuyerButton>Be Buyer</BeBuyerButton>
      {props.isSalesman ? (
        <>
          <BeSalesmanButton>Be Salesman</BeSalesmanButton>
          <BeBuyerForever shopId={props.shopId}>Be BuyerForever</BeBuyerForever>
        </>
      ) : (
        ""
      )}
      {props.isAdmin ? <BeAdminButton>Be Admin</BeAdminButton> : ""}
    </div>
  ) : (
    ""
  );
};
