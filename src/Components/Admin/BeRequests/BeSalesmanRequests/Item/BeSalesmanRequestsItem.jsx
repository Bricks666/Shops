import { Buttons } from "./Buttons/Buttons";

export const BeSalesmanRequestsItem = (props) => {
  return (
    <li>
      <h4>address {props.address}</h4>
      <p>id {props.id}</p>
      <p>shopId: {props.shopId}</p>
      <p>status {props.finished ? "Завершен" : "Незавершен"}</p>
      <Buttons finished={props.finished} requestId={props.id} />
    </li>
  );
};
