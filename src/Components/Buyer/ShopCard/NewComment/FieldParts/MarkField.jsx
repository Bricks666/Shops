import { connect } from "react-redux";
import { MARK_FIELD } from "../../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../../Redux/ToProps/mapStateToProps";

const MarkField = (props) => {
  return (
    <input
      type="range"
      min="-10"
      max="10"
      value={props.value ?? "0"}
      onChange={props.input}
      required={props.required}
      disabled={props.disabled}
    />
  );
};

export const MarkFieldConnect = connect(
  mapStateToProps(MARK_FIELD),
  mapDispatchToProps(MARK_FIELD)
)(MarkField);
