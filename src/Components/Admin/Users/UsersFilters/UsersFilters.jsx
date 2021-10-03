import { Field as ReduxField } from "redux-form";
import { Field } from "../../../Shared/Field/Field";
import { Selector } from "../../../Shared/Selector/Selector";

export const UsersFilters = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <ReduxField name="address" component={Field}>
        Адрес пользователя
      </ReduxField>
      <ReduxField name="fio" component={Field}>
        ФИО
      </ReduxField>
      <ReduxField
        name="role"
        component={Selector}
        values={["all", "1", "2", "3"]}
        names={["All", "Buyer", "Salesman", "Admin"]}
      >
        Роль
      </ReduxField>
    </form>
  );
};
