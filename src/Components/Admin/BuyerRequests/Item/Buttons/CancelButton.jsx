import { connect } from "react-redux";
import { CANCEL_BUYER_REQUEST } from "../../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../../Redux/ToProps/mapStateToProps";
import { Button } from "../../../../Shared/Button/Button";

export const CancelButton = connect(
  mapStateToProps(CANCEL_BUYER_REQUEST),
  mapDispatchToProps(CANCEL_BUYER_REQUEST)
)(Button);
