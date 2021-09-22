import ModalWindowStyle from "./ModalWindow.module.css";
import { Button } from "../Button/Button";

export const ModalWindow = (props) => {
  return props.condition ? (
    <div className={ModalWindowStyle.wrapper}>
      <div
        className={ModalWindowStyle.modal}
        onClick={(evt) => evt.stopPropagation()}
      >
        <Button onClick={props.close} />
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};
