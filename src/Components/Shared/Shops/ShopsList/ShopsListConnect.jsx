import { connect } from "react-redux";
import { SHOPS_LIST } from "../../../../Redux/ComponentConstants";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { ShopsList } from "./ShopsList";

export const ShopsListConnect = connect(
  mapStateToProps(SHOPS_LIST),
  mapDispatchToProps(SHOPS_LIST)
)(ShopsList);
