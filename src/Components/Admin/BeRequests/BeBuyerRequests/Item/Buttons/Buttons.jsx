import { AcceptButton } from "./AcceptButton";
import { CancelButton } from "./CancelButton";

export const Buttons = (props) => {
  return props.finished ? (
    ""
  ) : (
    <div>
      <CancelButton requestId={props.requestId}>Отменить запрос</CancelButton>
      <AcceptButton requestId={props.requestId}>Принять запрос</AcceptButton>
    </div>
  );
};
