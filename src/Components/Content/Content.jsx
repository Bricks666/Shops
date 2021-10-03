import { Switch, Route } from "react-router";
import { SalesmanContentConnect } from "../SalesmanContent/SalesmanContentConnect";
import { Admin } from "../Admin/Admin";
import { Buyer } from "../Buyer/Buyer";
import { Guest } from "../Guest/Guest";
import { ContentRedirectConnect } from "./ContentRedirect/ContentRedirectConnect";
import { Shop } from "../Shop/Shop";

export const Content = (props) => {
  return (
    <>
      <ContentRedirectConnect />
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
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/bank">Bank</Route>
        <Route path="/guest">
          <Guest />
        </Route>
      </Switch>
    </>
  );
};
