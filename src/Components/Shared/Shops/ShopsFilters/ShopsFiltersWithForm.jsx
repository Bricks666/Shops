import { reduxForm } from "redux-form";
import { ShopsFilters } from "./ShopsFilters";

export const ShopsFiltersWithForm = reduxForm({
  form: "shopsFilters",
  initialValues: { address: "", city: "" },
})(ShopsFilters);
