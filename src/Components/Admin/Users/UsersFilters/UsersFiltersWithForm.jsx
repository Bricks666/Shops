import { reduxForm } from "redux-form";
import { UsersFilters } from "./UsersFilters";

export const UsersFiltersWithForm = reduxForm({
  form: "usersFilters",
  initialValues: { address: "", fio: "", role: "all" },
})(UsersFilters);
