import { BottomWindow } from "../../Shared/BottomWindow/BottomWindow";
import { ComplaintAndSuggestionsButton } from "./ComplainsAndSuggestionsButton/ComplainsAndSuggestionButton";
import { SalesmenListConnect } from "./SalesmenList/SalesmenListConnnect";
import { ShowSalesmenButton } from "./ShowSalesmenButton/ShowSalesmenButton";
import { CASListConnect } from "./CASList/CASListConnect";
import { ModalWindow } from "../../Shared/ModalWindow/ModalWindow";
import { NewCommentConnect } from "./NewComment/NewCommentConnect";
import { ShowNewComment } from "./ShowNewCommet/ShowNewComment";

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
      <ShowNewComment>Создать новый комментарий</ShowNewComment>
      <BottomWindow condition={props.showSalesmen}>
        <SalesmenListConnect shopId={props.id} salesmen={props.salesmen} />
      </BottomWindow>
      <BottomWindow condition={props.showCAS}>
        <CASListConnect
          shopId={props.id}
          address={props.addresShop}
          complainsAndSuggestions={props.complainsAndSuggestions}
        />
      </BottomWindow>
      <ModalWindow condition={props.showWindow} close={props.close}>
        <NewCommentConnect address={props.addresShop} />
      </ModalWindow>
    </article>
  );
};
