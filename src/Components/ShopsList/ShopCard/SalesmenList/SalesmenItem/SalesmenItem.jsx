import { BottomWindow } from "../../../../Shared/BottomWindow/BottomWindow";
import { CASListConnect } from "../../../../Shared/CASList/CASListConnect";
import { ModalWindow } from "../../../../Shared/ModalWindow/ModalWindow";
import { NewCommentConnect } from "../../NewComment/NewCommentConnect";
import { Button } from "../../../../Shared/Button/Button";

export const SalesmenItem = (props) => {
  return (
    <li>
      <h4>{props.fio}</h4>
      <p>{props.address}</p>
      <Button onClick={props.toggleCAS}>Посмотреть отзывы</Button>
      <Button onClick={props.toggleComment}>Написать новый комментарий</Button>
      <BottomWindow condition={props.showCAS}>
        <CASListConnect address={props.address} />
      </BottomWindow>
      {/* Доделать окно для отправки комментария, потому что сейчас вылезают два поверх друг друга и сверху оказывается комментарии от контракта*/}
      <ModalWindow condition={props.showComment} close={props.toggleComment}>
        <NewCommentConnect address={props.address} />
      </ModalWindow>
    </li>
  );
};
