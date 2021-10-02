import { ShopCardWithSalesmen } from "../../Shared/ShopCard/ShopCard";
import { BeShopsSalesman } from "./BeShopsSalesman/BeSalesman";
import { SalesmanCardBuyer } from "./SalesmanCardBuyer/SalesmanCardBuyer";

export const ShopCardBuyer = (props) => {
  return (
    <ShopCardWithSalesmen {...props} SalesmanCard={SalesmanCardBuyer}>
      {props.isBuyer ? (
        <BeShopsSalesman shopId={props.id}>
          Стать продавцом магазина
        </BeShopsSalesman>
      ) : (
        ""
      )}
      {props.children}
    </ShopCardWithSalesmen>
  );
};
