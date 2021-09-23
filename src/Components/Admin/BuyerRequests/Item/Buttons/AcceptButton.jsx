import { connect } from "react-redux";
import { mapStateToProps } from "../../../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../../../Redux/ToProps/mapDispatchToProps";
import { ACCEPT_BUYER_REQUEST } from "../../../../../Redux/ComponentConstants";
import { Button } from "../../../../Shared/Button/Button";

export const AcceptButton = connect(
  mapStateToProps(ACCEPT_BUYER_REQUEST),
  mapDispatchToProps(ACCEPT_BUYER_REQUEST)
)(Button);
