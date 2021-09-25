import { AcceptButton } from "./AcceptButton";
import { CancelButton } from "./CancelButton";

export const Buttons = (props) => {
  return props.finished ? (
    ""
  ) : (
    <>
      <AcceptButton requestId={props.requestId}>Принять</AcceptButton>
      <CancelButton requestId={props.requestId}>Отклонить</CancelButton>
    </>
  );
};
