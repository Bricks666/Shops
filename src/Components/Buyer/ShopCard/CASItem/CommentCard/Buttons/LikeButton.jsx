import { connect } from "react-redux";
import { LIKE_COMMENT_BUTTON } from "../../../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../../../Redux/ToProps/mapStateToProps";
import { Button } from "../../../../../Shared/Button/Button";

export const LikeButton = connect(
  mapStateToProps(LIKE_COMMENT_BUTTON),
  mapDispatchToProps(LIKE_COMMENT_BUTTON)
)(Button);
