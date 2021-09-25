import { renderList } from "../../Shared/renderList";

export const BeRequests = (props) => {
  return <ul>{renderList(props.requests, props.requestCard)}</ul>;
};
