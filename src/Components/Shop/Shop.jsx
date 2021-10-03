import { Switch, Route } from "react-router";
import { BankRequestsConnect } from "./BankRequests/BankReuqestsConnect";
import { Navigation } from "./Navigation/Navigation";
import { ShopSalesmenListConnect } from "./ShopSalesmenList/ShopSalesmenListConnect";
import { ShopCASList } from "./ShopCASList";
import { CASItemCommentClass } from "../Shared/CASItem/CASItemCommentClass";

export const Shop = (props) => {
  console.log(props);
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/shop/salesmen">
          <ShopSalesmenListConnect />
        </Route>
        <Route path="/shop/cas">
          <ShopCASList CASCard={CASItemCommentClass} />
        </Route>
        <Route path="/shop/bankRequests">
          <BankRequestsConnect />
        </Route>
      </Switch>
    </div>
  );
};
