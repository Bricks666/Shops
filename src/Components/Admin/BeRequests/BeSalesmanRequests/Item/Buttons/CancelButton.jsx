import { connect } from "react-redux";
import { CANCEL_SALESMAN_REQUEST } from "../../../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../../../Redux/ToProps/mapDispatchToProps";
import { Button } from "../../../../../Shared/Button/Button";

export const CancelButton = connect(
  null,
  mapDispatchToProps(CANCEL_SALESMAN_REQUEST)
)(Button);
