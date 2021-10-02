import { ShopCardWithSalesmen } from "../../Shared/ShopCard/ShopCard";
import { SalesmanCardGuest } from "./SalesmanCard/SalesmanCard";

export const GuestShopCard = (props) => {
  return <ShopCardWithSalesmen {...props} SalesmanCard={SalesmanCardGuest} />;
};
