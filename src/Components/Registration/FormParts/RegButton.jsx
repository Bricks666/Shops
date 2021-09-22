import { connect } from "react-redux";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { Button } from "../../Shared/Button/Button";
import { REG_BUTTON } from "../../../Redux/ComponentConstants";

export const RegButton = connect(
  mapStateToProps(REG_BUTTON),
  mapDispatchToProps(REG_BUTTON)
)(Button);
