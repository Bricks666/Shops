import { connect } from "react-redux";
import { COMMENT_LIST } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { CommentList } from "./CommentList";

export const CommentListConnect = connect(
  null,
  mapDispatchToProps(COMMENT_LIST)
)(CommentList);
