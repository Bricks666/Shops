import { Field } from "../../Field/Field";
import { Field as ReduxField } from "redux-form";

export const ShopsFilters = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <ReduxField name="address" component={Field}>
        Адрес магазина
      </ReduxField>
      <ReduxField name="city" component={Field}>
        Город расположения магазина
      </ReduxField>
    </form>
  );
};
