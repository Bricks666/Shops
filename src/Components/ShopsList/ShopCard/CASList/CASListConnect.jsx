import { connect } from "react-redux";
import { CAS_LIST } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { CASList } from "./CASList";

export const CASListConnect = connect(
  mapStateToProps(CAS_LIST),
  mapDispatchToProps(CAS_LIST)
)(CASList);
