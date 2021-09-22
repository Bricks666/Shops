import { connect } from "react-redux";
import { SALESMEN_LIST } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { SalesmenList } from "./SalesmenList";

export const SalesmenListConnect = connect(
  mapStateToProps(SALESMEN_LIST),
  mapDispatchToProps(SALESMEN_LIST)
)(SalesmenList);
