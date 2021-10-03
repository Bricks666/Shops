import { BankRequestCard } from "./BankrequestCard/BankRequestCard";

const renderCards = (requests, Component, haveBankMoney) => {
  return requests.map((request) => {
    return <Component status={request} haveBankMoney={haveBankMoney} />;
  });
};

export const BankRequestsList = (props) => {
  debugger;
  return (
    <ol>{renderCards(props.requests, BankRequestCard, props.haveBankMoney)}</ol>
  );
};
