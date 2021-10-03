import { connect } from "react-redux";
import { SHOP_SALESMEN_LIST } from "../../../Redux/ComponentConstants";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { ShopSalesmenList } from "./ShopSalesmenList";

export const ShopSalesmenListConnect = connect(
  mapStateToProps(SHOP_SALESMEN_LIST)
)(ShopSalesmenList);
