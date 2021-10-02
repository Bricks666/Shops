import { connect } from "react-redux";
import { GUEST_BUTTON } from "../../Redux/ComponentConstants";
import { Button } from "../Shared/Button/Button";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";

export const GuestEnter = connect(
  null,
  mapDispatchToProps(GUEST_BUTTON)
)(Button);
