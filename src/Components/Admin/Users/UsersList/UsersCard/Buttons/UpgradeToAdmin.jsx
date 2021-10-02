import { connect } from "react-redux";
import { SET_ADMIN } from "../../../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../../../Redux/ToProps/mapDispatchToProps";
import { Button } from "../../../../../Shared/Button/Button";

export const UpgradeToAdmin = connect(
  null,
  mapDispatchToProps(SET_ADMIN)
)(Button);
