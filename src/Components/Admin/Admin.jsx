import { Switch, Route } from "react-router";
import { BeBuyerRequestsConnect } from "./BeRequests/BeBuyerRequests/BeBuyerRequestsConnect";
import { Navigation } from "./Navigation/Navigation";
import { BeSalesmanRequestsConnect } from "./BeRequests/BeSalesmanRequests/BeSalesmanRequestsConnect";
import { BeBuyerRequestsItem } from "./BeRequests/BeBuyerRequests/Item/BeBuyerRequestsItem";
import { BeSalesmanRequestsItem } from "./BeRequests/BeSalesmanRequests/Item/BeSalesmanRequestsItem";
import { ShopCardAdmin } from "./ShopCardAdmin/ShopCardAdmin";
import { Users } from "./Users/Users";
import { AdminShops } from "./AdminShops/AdminShops";

export const Admin = (props) => {
  return (
    <section>
      <Navigation />
      <Switch>
        <Route path="/admin/beAdmin">Admin</Route>
        <Route path="/admin/beSalesman">
          <BeSalesmanRequestsConnect requestCard={BeSalesmanRequestsItem} />
        </Route>
        <Route path="/admin/beBuyer">
          <BeBuyerRequestsConnect requestCard={BeBuyerRequestsItem} />
        </Route>
        <Route path="/admin/shops">
          <AdminShops ShopCard={ShopCardAdmin} />
        </Route>
        <Route path="/admin/users">
          <Users />
        </Route>
      </Switch>
    </section>
  );
};
