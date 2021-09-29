import { connect } from "react-redux";
import { NEW_CAS_BUTTON } from "../../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../../Redux/ToProps/mapStateToProps";
import { Button } from "../../../../Shared/Button/Button";

export const SendCommentButton = connect(
  mapStateToProps(NEW_CAS_BUTTON),
  mapDispatchToProps(NEW_CAS_BUTTON)
)(Button);
