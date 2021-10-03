import { Field as ReduxField } from "redux-form";
import { Button } from "../../../Shared/Button/Button";
import { Form } from "../../../Shared/Form/Form";
import { Field } from "../../../Shared/Field/Field";
import { FreeAddressesListConnect } from "./FreeAddressesList/FreeAddressesListConnect";

export const AddShopForm = (props) => {
  console.log(props);
  return (
    <Form onSubmit={props.handleSubmit} error={props.error}>
      <ReduxField
        name="freeAddress"
        component={FreeAddressesListConnect}
        disabled={props.submitting}
        required={true}
      >
        Свободные адреса
      </ReduxField>
      <ReduxField
        name="login"
        component={Field}
        disabled={props.submitting}
        required={true}
      >
        Логин нового магазина
      </ReduxField>
      <ReduxField
        name="password"
        type="password"
        component={Field}
        disabled={props.submitting}
        required={true}
      >
        Пароль нового магазина
      </ReduxField>
      <ReduxField
        name="city"
        component={Field}
        disabled={props.submitting}
        required={true}
      >
        Город нового магазина
      </ReduxField>
      <Button disabled={props.submitting || props.pristine || props.invalid}>
        Добавить магазин
      </Button>
    </Form>
  );
};
