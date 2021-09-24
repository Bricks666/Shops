import { connect } from "react-redux";
import { ACCEPT_SALESMAN_REQUEST } from "../../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../../Redux/ToProps/mapDispatchToProps";
import { Button } from "../../../../Shared/Button/Button";

export const AcceptButton = connect(
  null,
  mapDispatchToProps(ACCEPT_SALESMAN_REQUEST)
)(Button);
