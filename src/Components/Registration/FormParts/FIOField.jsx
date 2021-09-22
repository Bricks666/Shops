import { connect } from "react-redux";
import { REG_FIO } from "../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Field } from "../../Shared/Field/Field";

export const FIOField = connect(
  mapStateToProps(REG_FIO),
  mapDispatchToProps(REG_FIO)
)(Field);
