import { connect } from "react-redux";
import { SHOW_COMPLAINS_AND_SUGGESTION_BUTTON } from "../../../../Redux/ComponentConstants";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { Button } from "../../../Shared/Button/Button";

export const ComplaintAndSuggestionsButton = connect(
  mapStateToProps(SHOW_COMPLAINS_AND_SUGGESTION_BUTTON),
  mapDispatchToProps(SHOW_COMPLAINS_AND_SUGGESTION_BUTTON)
)(Button);
