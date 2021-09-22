import { connect } from "react-redux";
import { SHOP_CARD } from "../../../Redux/ActionsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { ShopCard } from "./ShopCard";

export const ShopCardConnect = connect(
  mapStateToProps(SHOP_CARD),
  mapDispatchToProps(SHOP_CARD)
)(ShopCard);
