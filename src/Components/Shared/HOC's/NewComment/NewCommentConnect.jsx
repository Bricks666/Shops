import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm } from "redux-form";
import { NEW_COMMENT } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { NewComment } from "./NewComment";

export const NewCommentConnect = compose(
  connect(null, mapDispatchToProps(NEW_COMMENT)),
  reduxForm({ form: "createNewComment" })
)(NewComment);
