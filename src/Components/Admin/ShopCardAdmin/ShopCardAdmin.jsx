import { ShopCard } from "../../Shared/ShopCard/ShopCard";
import { RemoveShop } from "./Buttons/RemoveShop";
import { BottomWindow } from "../../Shared/BottomWindow/BottomWindow";
import { SalesmenListConnect } from "../../Shared/SalesmenList/SalesmenListConnnect";
import { ShowSalesmenButton } from "../../Shared/SalesmenList/ShowSalesmenButton/ShowSalesmenButton";
import { SalesmanCardAdmin } from "./SalesmanCard/SalesmanCardAdmin";

export const ShopCardAdmin = (props) => {
  return (
    <ShopCard addressShop={props.addressShop} city={props.city}>
      <RemoveShop shopId={props.id}>Удалить магазин</RemoveShop>
      <ShowSalesmenButton shopId={props.id}>
        Показать продавцов
      </ShowSalesmenButton>
      <BottomWindow condition={props.showSalesmen}>
        <SalesmenListConnect
          shopId={props.id}
          salesmen={props.salesmen}
          salesmanCard={SalesmanCardAdmin}
        />
      </BottomWindow>
    </ShopCard>
  );
};
