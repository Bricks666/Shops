import { connect } from "react-redux";
import { compose } from "redux";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { SHOP_CARD_BUYER } from "../../../Redux/ComponentConstants";
import { ShopCardBuyer } from "./ShopCardBuyer";
import { withCASList } from "../../Shared/HOC's/withCASList";
import { CASItemConnect } from "./CASItem/CASItemConnect";
import { withCASCreate } from "../../Shared/HOC's/withCASCreate";

export const ShopCardConnect = compose(
  connect(mapStateToProps(SHOP_CARD_BUYER)),
  withCASCreate,
  withCASList(CASItemConnect)
)(ShopCardBuyer);
