import { BottomWindow } from "../../Shared/BottomWindow/BottomWindow";
import { SalesmenListConnect } from "./SalesmenList/SalesmenListConnnect";
import { ShowSalesmenButton } from "./ShowSalesmenButton/ShowSalesmenButton";
import { CASListConnect } from "../../Shared/CASList/CASListConnect";
import { ModalWindow } from "../../Shared/ModalWindow/ModalWindow";
import { NewCommentConnect } from "./NewComment/NewCommentConnect";
import { Button } from "../../Shared/Button/Button";
import { BeShopsSalesman } from "./BeShopsSalesman/BeSalesman";

export const ShopCard = (props) => {
  return (
    <article>
      <h3>{props.addresShop}</h3>
      <p>{props.city}</p>
      <ShowSalesmenButton shopId={props.id}>
        {props.showSalesmen ? "Hidden salesmen" : "Show Salesmen"}
      </ShowSalesmenButton>
      <Button address={props.addresShop} onClick={props.toggleCAS}>
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
        <SalesmenListConnect shopId={props.id} salesmen={props.salesmen} />
      </BottomWindow>
      <BottomWindow condition={props.showCAS}>
        <CASListConnect address={props.addresShop} />
      </BottomWindow>
      <ModalWindow condition={props.showComment} close={props.toggleComment}>
        <NewCommentConnect address={props.addresShop} />
      </ModalWindow>
    </article>
  );
};
