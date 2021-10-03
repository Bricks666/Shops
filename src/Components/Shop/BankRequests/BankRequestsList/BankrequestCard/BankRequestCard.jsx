export const BankRequestCard = (props) => {
  return props.status ? (
    <li>
      <p>
        Статус заявки:{" "}
        {props.haveBankMoney ? "Заявка принята" : "Заявка в обработки"}
      </p>
    </li>
  ) : (
    ""
  );
};
