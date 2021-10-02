import { SalesmenItem } from "../../Shared/SalesmenItem/SalesmenItem";
import { ShopCardWithSalesmen } from "../../Shared/ShopCard/ShopCard";
import { RemoveShop } from "./Buttons/RemoveShop";

export const ShopCardAdmin = (props) => {
  return (
    <ShopCardWithSalesmen {...props} SalesmanCard={SalesmenItem}>
      <RemoveShop shopId={props.id}>Удалить магазин</RemoveShop>
      {props.children}
    </ShopCardWithSalesmen>
  );
};
