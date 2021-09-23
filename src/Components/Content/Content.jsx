import { Switch, Route } from "react-router";
import { SalesmanContentConnect } from "../SalesmanContent/SalesmanContentConnect";
import { ShopsConnect } from "../ShopsList/ShopsConnect";
import { Admin } from "../Admin/Admin";

export const Content = (props) => {
  return (
    <Switch>
      <Route path="/buyer">
        <ShopsConnect />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/salesman">
        <SalesmanContentConnect />
      </Route>
    </Switch>
  );
};
