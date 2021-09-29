import { connect } from "react-redux";
import { DISLIKE_CAS_BUTTON } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { Button } from "../../../Shared/Button/Button";

export const DislikeButton = connect(
  mapStateToProps(DISLIKE_CAS_BUTTON),
  mapDispatchToProps(DISLIKE_CAS_BUTTON)
)(Button);
