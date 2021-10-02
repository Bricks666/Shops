import { connect } from "react-redux";
import { SET_SHOP } from "../../../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../../../Redux/ToProps/mapStateToProps";
import { Button } from "../../../../../Shared/Button/Button";

export const AddShopButton = connect(
  mapStateToProps(SET_SHOP),
  mapDispatchToProps(SET_SHOP)
)(Button);
