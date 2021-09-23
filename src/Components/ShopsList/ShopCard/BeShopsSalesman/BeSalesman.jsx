import { connect } from "react-redux";
import { BE_SALESMAN_OF_SHOP } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { Button } from "../../../Shared/Button/Button";

export const BeShopsSalesman = connect(
  mapStateToProps(BE_SALESMAN_OF_SHOP),
  mapDispatchToProps(BE_SALESMAN_OF_SHOP)
)(Button);
