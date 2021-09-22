import { connect } from "react-redux";
import { BE_SALESMAN } from "../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Button } from "../../Shared/Button/Button";

export const BeSalesmanButton = connect(
  mapStateToProps(BE_SALESMAN),
  mapDispatchToProps(BE_SALESMAN)
)(Button);
