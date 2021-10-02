import { Switch, Route } from "react-router";
import { SalesmanContentConnect } from "../SalesmanContent/SalesmanContentConnect";
import { Admin } from "../Admin/Admin";
import { Buyer } from "../Buyer/Buyer";
import { Guest } from "../Guest/Guest";

export const Content = (props) => {
  return (
    <Switch>
      <Route path="/buyer">
        <Buyer />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/salesman">
        <SalesmanContentConnect />
      </Route>
      <Route path="/provider">Provider</Route>
      <Route path="/shop">Shop</Route>
      <Route path="/bank">Bank</Route>
      <Route path="/guest">
        <Guest />
      </Route>
    </Switch>
  );
};
