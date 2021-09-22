import { connect } from "react-redux";
import { REG_PASSWORD } from "../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Field } from "../../Shared/Field/Field";

export const PasswordField = connect(
  mapStateToProps(REG_PASSWORD),
  mapDispatchToProps(REG_PASSWORD)
)(Field);
