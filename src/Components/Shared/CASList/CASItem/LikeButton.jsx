import { connect } from "react-redux";
import { LIKE_BUTTON } from "../../../../Redux/ComponentConstants";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { Button } from "../../Button/Button";

export const LikeButton = connect(
  mapStateToProps(LIKE_BUTTON),
  mapDispatchToProps(LIKE_BUTTON)
)(Button);
