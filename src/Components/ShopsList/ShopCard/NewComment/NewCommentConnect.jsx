import { connect } from "react-redux";
import { NEW_COMMENT } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { NewComment } from "./NewComment";

export const NewCommentConnect = connect(
  mapStateToProps(NEW_COMMENT),
  mapDispatchToProps(NEW_COMMENT)
)(NewComment);
