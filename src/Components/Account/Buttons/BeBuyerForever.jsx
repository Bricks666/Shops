import { connect } from "react-redux";
import { BE_BUYER_FOREVER } from "../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { Button } from "../../Shared/Button/Button";

export const BeBuyerForever = connect(
  null,
  mapDispatchToProps(BE_BUYER_FOREVER)
)(Button);
