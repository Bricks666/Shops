import { UpgradeToAdmin } from "./UpgradeToAdmin";

export const Buttons = (props) => {
  return (
    <div>
      {props.isAdmin || props.isSalesman ? (
        ""
      ) : (
        <UpgradeToAdmin userAddress={props.userAddress}>
          Повысить до администратора
        </UpgradeToAdmin>
      )}
    </div>
  );
};
