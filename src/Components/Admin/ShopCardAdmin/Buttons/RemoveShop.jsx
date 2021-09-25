import { connect } from "react-redux";
import { REMOVE_SHOP_BUTTON } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { Button } from "../../../Shared/Button/Button";

export const RemoveShop = connect(
  null,
  mapDispatchToProps(REMOVE_SHOP_BUTTON)
)(Button);
