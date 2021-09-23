import { BottomWindow } from "../../Shared/BottomWindow/BottomWindow";
import { ComplaintAndSuggestionsButton } from "./ComplainsAndSuggestionsButton/ComplainsAndSuggestionButton";
import { SalesmenListConnect } from "./SalesmenList/SalesmenListConnnect";
import { ShowSalesmenButton } from "./ShowSalesmenButton/ShowSalesmenButton";
import { CASListConnect } from "./CASList/CASListConnect";
import { ModalWindow } from "../../Shared/ModalWindow/ModalWindow";
import { NewCommentConnect } from "./NewComment/NewCommentConnect";
import { Button } from "../../Shared/Button/Button";

export const ShopCard = (props) => {

  return (
    <article>
      <h3>{props.addresShop}</h3>
      <p>{props.city}</p>
      <ShowSalesmenButton shopId={props.id}>
        {props.showSalesmen ? "Hidden salesmen" : "Show Salesmen"}
      </ShowSalesmenButton>
      <ComplaintAndSuggestionsButton
        address={props.addresShop}
        shopId={props.id}
      >
        {`${props.showCAS ? "Hidden" : "Show"} Complain And Suggestion`}
      </ComplaintAndSuggestionsButton>
      <Button onClick={props.show}>Создать новый комментарий</Button>
      <BottomWindow condition={props.showSalesmen}>
        <SalesmenListConnect shopId={props.id} salesmen={props.salesmen} />
      </BottomWindow>
      <BottomWindow condition={props.showCAS}>
        <CASListConnect
          shopId={props.id}
          address={props.addresShop}
        />
      </BottomWindow>
      <ModalWindow condition={props.condition} close={props.close}>
        <NewCommentConnect address={props.addresShop} />
      </ModalWindow>
    </article>
  );
};
