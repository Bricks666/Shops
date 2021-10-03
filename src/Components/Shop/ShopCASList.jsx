import { connect } from "react-redux";
import { SHOP_CAS_LIST } from "../../Redux/ComponentConstants";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { CASListConnect } from "../Shared/CASList/CASListConnect";

export const ShopCASList = connect(mapStateToProps(SHOP_CAS_LIST))(
  CASListConnect
);
