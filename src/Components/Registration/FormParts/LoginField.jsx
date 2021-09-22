import { connect } from "react-redux";
import { REG_LOGIN } from "../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Field } from "../../Shared/Field/Field";

export const LoginField = connect(
  mapStateToProps(REG_LOGIN),
  mapDispatchToProps(REG_LOGIN)
)(Field);
