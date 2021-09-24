import { AcceptButton } from "./Buttons/AcceptButton";
import { CancelButton } from "./Buttons/CancelButton";

export const SalesmanRequestsItem = (props) => {
  return (
    <li>
      <h4>address {props.address}</h4>
      <p>id {props.id}</p>
      <p>shopId: {props.shopId}</p>
      <p>status {props.finished ? "Завершен" : "Незавершен"}</p>
      {props.finished ? (
        ""
      ) : (
        <>
          <AcceptButton requestId={props.id}>Принять</AcceptButton>
          <CancelButton requestId={props.id}>Отклонить</CancelButton>
        </>
      )}
    </li>
  );
};
