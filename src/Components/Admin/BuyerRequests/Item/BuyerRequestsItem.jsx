import { AcceptButton } from "./Buttons/AcceptButton";
import { CancelButton } from "./Buttons/CancelButton";

export const BuyerRequestsItem = (props) => {
  return (
    <li>
      <h4>{props.address}</h4>
      <p>{props.id}</p>
      <span>status {props.finished ? "Завершен" : "Незавершен"}</span>
      {props.finished ? (
        ""
      ) : (
        <div>
          <CancelButton requestId={props.id}>Отменить запрос</CancelButton>
          <AcceptButton requestId={props.id}>Принять запрос</AcceptButton>
        </div>
      )}
    </li>
  );
};
