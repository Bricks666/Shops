import { NavLink } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <ul>
      <li>
        <NavLink to="/admin/beAdmin">Запросы на админа</NavLink>
      </li>
      <li>
        <NavLink to="/admin/beSalesman">Запросы на продавца</NavLink>
      </li>
      <li>
        <NavLink to="/admin/beBuyer">Запросы на покупателя</NavLink>
      </li>
      <li>
        <NavLink to="/admin/shops">Текущие магазины</NavLink>
      </li>
      <li>
        <NavLink to="/admin/users">Все пользователи</NavLink>
      </li>
    </ul>
  );
};
