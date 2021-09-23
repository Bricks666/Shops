import { renderList } from "../../Shared/renderList";
import { BuyerRequestsItem } from "./Item/BuyerRequestsItem";

export const BuyerRequests = (props) => {
  return <ul>{renderList(props.buyer, BuyerRequestsItem)}</ul>;
};
