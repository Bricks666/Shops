import { Switch, Route } from "react-router";
import { BeBuyerRequestsConnect } from "./BeRequests/BeBuyerRequests/BeBuyerRequestsConnect";
import { Navigation } from "./Navigation/Navigation";
import { BeSalesmanRequestsConnect } from "./BeRequests/BeSalesmanRequests/BeSalesmanRequestsConnect";
import { Shops } from "../Shared/Shops/Shops";
import { BeBuyerRequestsItem } from "./BeRequests/BeBuyerRequests/Item/BeBuyerRequestsItem";
import { BeSalesmanRequestsItem } from "./BeRequests/BeSalesmanRequests/Item/BeSalesmanRequestsItem";
import { UsersConnect } from "./Users/UsersConnect";
import { ShopCardAdmin } from "./ShopCardAdmin/ShopCardAdmin";

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
          <Shops ShopCard={ShopCardAdmin} />
        </Route>
        <Route path="/admin/users">
          <UsersConnect />
        </Route>
      </Switch>
    </section>
  );
};
