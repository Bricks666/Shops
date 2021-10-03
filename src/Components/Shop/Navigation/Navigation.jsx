import { NavLink } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <ul>
      <li>
        <NavLink to="/shop/salesmen">Продавцы</NavLink>
      </li>
      <li>
        <NavLink to="/shop/cas">Отзывы и предложения</NavLink>
      </li>
      <li>
        <NavLink to="/shop/bankRequests">Запросы в банк</NavLink>
      </li>
    </ul>
  );
};
