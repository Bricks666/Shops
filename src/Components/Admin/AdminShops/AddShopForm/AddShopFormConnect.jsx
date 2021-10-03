import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { AddShopForm } from "./AddShopForm";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { ADD_SHOP_FORM } from "../../../../Redux/ComponentConstants";

const validate = (values) => {
  const errors = {};

  if (values.city?.replace(/[^a-z-]/i) !== values.city) {
    errors.city = "Название города не может содержать цифр";
  } else if (values.city?.toLowerCase() !== values.city) {
    errors.city = "Название города не должно быть с большой буквы";
  }

  if (values.password?.length < 5) {
    errors.password = "Пароль слишком короткий";
  }

  return errors;
};

export const AddShopFormConnect = compose(
  connect(null, mapDispatchToProps(ADD_SHOP_FORM)),
  reduxForm({
    form: "addShop",
    initialValues: { freeAddress: "0", login: "", password: "", city: "" },
    validate,
  })
)(AddShopForm);
