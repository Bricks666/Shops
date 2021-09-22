import { connect } from "react-redux";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { Button } from "../../Shared/Button/Button";
import { BE_BUYER } from "../../../Redux/ComponentConstants";

export const BeBuyerButton = connect(
  mapStateToProps(BE_BUYER),
  mapDispatchToProps(BE_BUYER)
)(Button);
