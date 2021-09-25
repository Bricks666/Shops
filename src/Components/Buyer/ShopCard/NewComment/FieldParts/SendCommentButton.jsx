import { connect } from "react-redux";
import { SEND_COMMENT_BUTTON } from "../../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../../Redux/ToProps/mapStateToProps";
import { Button } from "../../../../Shared/Button/Button";

export const SendCommentButton = connect(
  mapStateToProps(SEND_COMMENT_BUTTON),
  mapDispatchToProps(SEND_COMMENT_BUTTON)
)(Button);
