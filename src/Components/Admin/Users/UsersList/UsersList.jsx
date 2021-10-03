import { renderList } from "../../../Shared/renderList";
import { UsersCard } from "./UsersCard/UsersCard";

export const UsersList = (props) => {

  const list = renderList(props.users, UsersCard);
  if (list.length === 0) {
    return <div>Список пока что пуст</div>;
  }
  return <ul>{list}</ul>;
};
