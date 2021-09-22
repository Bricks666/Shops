import { connect } from "react-redux";
import { SHOW_NEW_COMMENT } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { Button } from "../../../Shared/Button/Button";

export const ShowNewComment = connect(
  mapStateToProps(SHOW_NEW_COMMENT),
  mapDispatchToProps(SHOW_NEW_COMMENT)
)(Button);
