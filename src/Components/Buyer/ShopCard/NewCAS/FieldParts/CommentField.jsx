import { connect } from "react-redux";
import { CAS_BUTTON } from "../../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../../Redux/ToProps/mapStateToProps";

const CommentField = (props) => {
  return (
    <textarea
      value={props.value ?? ""}
      required={props.required}
      disabled={props.disabled}
      onChange={props.input}
    ></textarea>
  );
};

export const CommentFieldConnect = connect(
  mapStateToProps(CAS_BUTTON),
  mapDispatchToProps(CAS_BUTTON)
)(CommentField);
