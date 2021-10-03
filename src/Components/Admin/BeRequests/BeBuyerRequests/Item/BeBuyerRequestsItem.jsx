import { Buttons } from "./Buttons/Buttons";

export const BeBuyerRequestsItem = (props) => {
  return (
    <li>
      <h4>{props.address}</h4>
      <p>{props.id}</p>
      <span>status {props.isFinish ? "Завершен" : "Незавершен"}</span>
      <Buttons finished={props.isFinish} requestId={props.id} />
    </li>
  );
};
