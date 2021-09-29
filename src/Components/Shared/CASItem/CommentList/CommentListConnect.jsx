import { connect } from "react-redux";
import { COMMENT_LIST } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { CommentList } from "./CommentList";

export const CommentListConnect = connect(
  mapStateToProps(COMMENT_LIST),
  mapDispatchToProps(COMMENT_LIST)
)(CommentList);
