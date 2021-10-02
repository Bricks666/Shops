import { connect } from "react-redux";
import { SALESMEN_LIST } from "../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { SalesmenList } from "./SalesmenList";

export const SalesmenListConnect = connect(
  null,
  mapDispatchToProps(SALESMEN_LIST)
)(SalesmenList);
