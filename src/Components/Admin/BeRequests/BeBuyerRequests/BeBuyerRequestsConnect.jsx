import { connect } from "react-redux";
import { BUYER_REQUESTS } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { BeRequestsClass } from "../BeRequestsClass";

export const BeBuyerRequestsConnect = connect(
  mapStateToProps(BUYER_REQUESTS),
  mapDispatchToProps(BUYER_REQUESTS)
)(BeRequestsClass);
