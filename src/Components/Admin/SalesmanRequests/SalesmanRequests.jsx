import { renderList } from "../../Shared/renderList";
import { SalesmanRequestsItem } from "./Item/SalesmanRequestsItem";

export const SalesmanRequests = (props) => {
  return <ul>{renderList(props.salesman, SalesmanRequestsItem)}</ul>;
};
