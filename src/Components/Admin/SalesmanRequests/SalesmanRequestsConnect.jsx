import { connect } from "react-redux";
import { SalesmanRequestsClass } from "./SalesmanRequestsClass";
import { SALESMAN_REQUESTS } from "../../../Redux/ComponentConstants";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";

export const SalesmanRequestsConnect = connect(
  mapStateToProps(SALESMAN_REQUESTS),
  mapDispatchToProps(SALESMAN_REQUESTS)
)(SalesmanRequestsClass);
