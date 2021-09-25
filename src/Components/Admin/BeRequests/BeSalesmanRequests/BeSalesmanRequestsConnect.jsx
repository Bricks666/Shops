import { connect } from "react-redux";
import { SALESMAN_REQUESTS } from "../../../../Redux/ComponentConstants";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { BeRequestsClass } from "../BeRequestsClass";

export const BeSalesmanRequestsConnect = connect(
  mapStateToProps(SALESMAN_REQUESTS),
  mapDispatchToProps(SALESMAN_REQUESTS)
)(BeRequestsClass);
