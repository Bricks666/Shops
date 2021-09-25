import { SalesmenItem } from "../../../Shared/SalesmenItem/SalesmenItem";
import { Button } from "../../../Shared/Button/Button";
import { CASListConnect } from "../../../Shared/CASList/CASListConnect";
import { BottomWindow } from "../../../Shared/BottomWindow/BottomWindow";
import { ModalWindow } from "../../../Shared/ModalWindow/ModalWindow";
import { NewCommentConnect } from "../NewComment/NewCommentConnect";

export const SalesmanCardBuyer = (props) => {
  return (
    <SalesmenItem fio={props.fio} address={props.address}>
      <Button onClick={props.toggleCAS}>Посмотреть отзывы</Button>
      <Button onClick={props.toggleComment}>Написать новый комментарий</Button>
      <BottomWindow condition={props.showCAS}>
        <CASListConnect address={props.address} />
      </BottomWindow>
      <ModalWindow condition={props.showComment} close={props.toggleComment}>
        <NewCommentConnect address={props.address} />
      </ModalWindow>
    </SalesmenItem>
  );
};
