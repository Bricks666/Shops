import { BottomWindow } from "../../../../Shared/BottomWindow/BottomWindow";
import { CASListConnect } from "../../CASList/CASListConnect";
import { ComplaintAndSuggestionsButton } from "../../ComplainsAndSuggestionsButton/ComplainsAndSuggestionButton";
import { ModalWindow } from "../../../../Shared/ModalWindow/ModalWindow";
import { NewCommentConnect } from "../../NewComment/NewCommentConnect";
import { ShowNewComment } from "../../ShowNewCommet/ShowNewComment";

export const SalesmenItem = (props) => {
  console.log(props);
  return (
    <li>
      <h4>{props.fio}</h4>
      <p>{props.address}</p>
      <ComplaintAndSuggestionsButton
        address={props.address}
        shopId={props.shopId}
        isSalesman={true}
      >
        Посмотреть отзывы
      </ComplaintAndSuggestionsButton>
      <ShowNewComment>Написать новый комментарий</ShowNewComment>
      <BottomWindow condition={props.showCAS}>
        <CASListConnect
          shopId={props.shopId}
          address={props.address}
          isSalesman={true}
          complainsAndSuggestions={props.complainsAndSuggestions}
        />
      </BottomWindow>
      {/* Доделать окно для отправки комментария, потому что сейчас вылезают два поверх друг друга и сверху оказывается комментарии от контракта*/}
      <ModalWindow condition={props.condition} close={props.close}>
        <NewCommentConnect address={props.address} />
      </ModalWindow>
    </li>
  );
};
