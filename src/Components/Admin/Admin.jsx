import { Switch, Route } from "react-router";
import { NavLink } from "react-router-dom";
import { BuyerRequestsConnect } from "./BuyerRequests/BuyerRequestsConnect";

export const Admin = (props) => {
  return (
    <section>
      <NavLink to="/admin/beAdmin">Запросы на админа</NavLink>
      <NavLink to="/admin/beSalesman">Запросы на продавца</NavLink>
      <NavLink to="/admin/beBuyer">Запросы на покупателя</NavLink>
      <Switch>
        <Route path="/admin/beAdmin">Admin</Route>
        <Route path="/admin/beSalesman">Salesman</Route>
        <Route path="/admin/beBuyer">
          <BuyerRequestsConnect />
        </Route>
      </Switch>
    </section>
  );
};
