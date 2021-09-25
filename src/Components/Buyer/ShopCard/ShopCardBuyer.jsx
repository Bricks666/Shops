import { ShopCard } from "../../Shared/ShopCard/ShopCard";
import { Button } from "../../Shared/Button/Button";
import { ShowSalesmenButton } from "../../Shared/SalesmenList/ShowSalesmenButton/ShowSalesmenButton";
import { BeShopsSalesman } from "./BeShopsSalesman/BeSalesman";
import { BottomWindow } from "../../Shared/BottomWindow/BottomWindow";
import { ModalWindow } from "../../Shared/ModalWindow/ModalWindow";
import { SalesmenListConnect } from "../../Shared/SalesmenList/SalesmenListConnnect";
import { CASListConnect } from "../../Shared/CASList/CASListConnect";
import { NewCommentConnect } from "./NewComment/NewCommentConnect";
import { SalesmanCardClass } from "./SalesmanCardBuyer/SalesmanCardClass";

export const ShopCardBuyer = (props) => {
  console.log(props);
  return (
    <ShopCard addressShop={props.addressShop} city={props.city}>
      <ShowSalesmenButton shopId={props.id}>
        {props.showSalesmen ? "Hidden salesmen" : "Show Salesmen"}
      </ShowSalesmenButton>
      <Button address={props.addressShop} onClick={props.toggleCAS}>
        {`${props.showCAS ? "Hidden" : "Show"} Complain And Suggestion`}
      </Button>
      <Button onClick={props.toggleComment}>Создать новый комментарий</Button>
      {props.isBuyer ? (
        <BeShopsSalesman shopId={props.id}>
          Стать продавцом магазина
        </BeShopsSalesman>
      ) : (
        ""
      )}
      <BottomWindow condition={props.showSalesmen}>
        <SalesmenListConnect
          shopId={props.id}
          salesmen={props.salesmen}
          salesmanCard={SalesmanCardClass}
        />
      </BottomWindow>
      <BottomWindow condition={props.showCAS}>
        <CASListConnect address={props.addressShop} />
      </BottomWindow>
      <ModalWindow condition={props.showComment} close={props.toggleComment}>
        <NewCommentConnect address={props.addressShop} />
      </ModalWindow>
    </ShopCard>
  );
};
