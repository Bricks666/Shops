import { connect } from "react-redux";
import { SALESMAN_CONTENT } from "../../Redux/ComponentConstants";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { SalesmanContent } from "./SalesmanContent";

export const SalesmanContentConnect = connect(
  mapStateToProps(SALESMAN_CONTENT)
)(SalesmanContent);
