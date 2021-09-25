import { AddShopButton } from "./AddShopButton";
import { UpgradeToAdmin } from "./UpgradeToAdmin";

export const Buttons = (props) => {
  return props.isSalesman ? (
    ""
  ) : (
    <div>
      <AddShopButton userAddress={props.userAddress}>
        Сделать магазином
      </AddShopButton>
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
