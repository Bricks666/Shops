import { connect } from "react-redux";
import { SHOPS_LIST } from "../../Redux/ComponentConstants";
import { ShopsList } from "./ShopsList";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";

export const ShopsConnect = connect(
  mapStateToProps(SHOPS_LIST),
  mapDispatchToProps(SHOPS_LIST)
)(ShopsList);
