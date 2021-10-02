import { connect } from "react-redux";
import { LIKE_CAS_BUTTON } from "../../../../../Redux/ComponentConstants";
import { mapStateToProps } from "../../../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../../../Redux/ToProps/mapDispatchToProps";
import { Button } from "../../../../Shared/Button/Button";

export const LikeButton = connect(
  mapStateToProps(LIKE_CAS_BUTTON),
  mapDispatchToProps(LIKE_CAS_BUTTON)
)(Button);
