import { AddShopButton } from "./AddShopButton";
import { UpgradeToAdmin } from "./UpgradeToAdmin";
import { ModalWindow } from "../../../../../Shared/ModalWindow/ModalWindow";

export const Buttons = (props) => {
  return props.isSalesman ? (
    ""
  ) : (
    <div>
      <AddShopButton userAddress={props.userAddress}>
        Сделать магазином
      </AddShopButton>
      <ModalWindow>

      </ModalWindow>
      {props.isAdmin ? (
        ""
      ) : (
        <UpgradeToAdmin userAddress={props.userAddress}>
          Повысить до админа
        </UpgradeToAdmin>
      )}
    </div>
  );
};
