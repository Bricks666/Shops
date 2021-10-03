import { RequestButton } from "./RequestButton/RequestButton";
import { BankRequestsListConnect } from "./BankRequestsList/BankRequestsListConnect";

export const BankRequests = (props) => {
  return (
    <div>
      <RequestButton shopId={props.shopId} disabled={props.haveBankMoney}>
        Отправить запрос в банк
      </RequestButton>
      <BankRequestsListConnect
        id={props.shopId}
        haveBankMoney={props.haveBankMoney}
      />
    </div>
  );
};
