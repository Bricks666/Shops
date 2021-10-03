import { Buttons } from "./Buttons/Buttons";

export const BeSalesmanRequestsItem = (props) => {
  return (
    <li>
      <h4>address {props.address}</h4>
      <p>id {props.id}</p>
      <p>shopId: {props.shopId}</p>
      <p>status {props.isFinish ? "Завершен" : "Незавершен"}</p>
      <Buttons finished={props.isFinish} requestId={props.id} />
    </li>
  );
};
