import { connect } from "react-redux";
import { BE_ADMIN } from "../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Button } from "../../Shared/Button/Button";

export const BeAdminButton = connect(
  mapStateToProps(BE_ADMIN),
  mapDispatchToProps(BE_ADMIN)
)(Button);
