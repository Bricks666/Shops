import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { BANK_REQUEST_BUTTON } from "../../../../Redux/ComponentConstants";
import { Button } from "../../../Shared/Button/Button";

export const RequestButton = connect(
  null,
  mapDispatchToProps(BANK_REQUEST_BUTTON)
)(Button);
