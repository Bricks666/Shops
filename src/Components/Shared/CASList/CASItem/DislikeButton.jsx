import { DISLIKE_BUTTON } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { Button } from "../../Button/Button";
import { connect } from "react-redux";

export const DislikeButton = connect(
  mapStateToProps(DISLIKE_BUTTON),
  mapDispatchToProps(DISLIKE_BUTTON)
)(Button);
