import { UsersFiltersWithForm } from "./UsersFilters/UsersFiltersWithForm";
import { UsersListConnect } from "./UsersList/UsersListConnect";

export const Users = (props) => {
  return (
    <div>
      <UsersFiltersWithForm />
      <UsersListConnect />
    </div>
  );
};
