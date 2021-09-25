import { renderList } from "../../Shared/renderList";
import { UsersCard } from "./UsersCard/UsersCard";

export const Users = (props) => {
  return <ul>{renderList(props.users, UsersCard)}</ul>;
};
