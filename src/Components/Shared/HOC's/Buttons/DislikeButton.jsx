import { connect } from "react-redux";
import { DISLIKE_COMMENT_BUTTON } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { Button } from "../../Button/Button";

export const DislikeButton = connect(
  mapStateToProps(DISLIKE_COMMENT_BUTTON),
  mapDispatchToProps(DISLIKE_COMMENT_BUTTON)
)(Button);
