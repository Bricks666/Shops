import { connect } from "react-redux";
import { CAS_ITEM } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { CASBuyerItem } from "./CASBuyerItem";
import { withCommentCreate } from "../../../Shared/HOC's/withCommentCreate";
import { compose } from "redux";

export const CASItemConnect = compose(
  connect(mapStateToProps(CAS_ITEM), mapDispatchToProps(CAS_ITEM)),
  withCommentCreate
)(CASBuyerItem);
