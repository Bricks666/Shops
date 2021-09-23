import { connect } from "react-redux";
import { BUYER_REQUESTS } from "../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { BuyerRequestsClass } from "./BuyerRequestsClass";

export const BuyerRequestsConnect = connect(
  mapStateToProps(BUYER_REQUESTS),
  mapDispatchToProps(BUYER_REQUESTS)
)(BuyerRequestsClass);
