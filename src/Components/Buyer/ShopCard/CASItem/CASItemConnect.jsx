import { connect } from "react-redux";
import { CAS_ITEM } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { CASBuyerItemClass } from "./CASBuyerItemClass";

export const CASItemConnect = connect(
  mapStateToProps(CAS_ITEM),
  mapDispatchToProps(CAS_ITEM)
)(CASBuyerItemClass);
