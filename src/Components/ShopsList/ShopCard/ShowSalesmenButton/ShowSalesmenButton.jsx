import { connect } from "react-redux";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { SHOW_SALESMEN_BUTTON } from "../../../../Redux/ComponentConstants";
import { Button } from "../../../Shared/Button/Button";

export const ShowSalesmenButton = connect(
  mapStateToProps(SHOW_SALESMEN_BUTTON),
  mapDispatchToProps(SHOW_SALESMEN_BUTTON)
)(Button);
