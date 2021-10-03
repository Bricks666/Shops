import { Salesmen } from "../../Shared/SalesmenList/SalesmenList";
import { ShopSalesmanCard } from "./ShopSalesmanCard/ShopSalesmanCard";

export const ShopSalesmenList = (props) => {
  console.log(props.salesmen);
  return <Salesmen salesmen={props.salesmen} SalesmanCard={ShopSalesmanCard} />;
};
