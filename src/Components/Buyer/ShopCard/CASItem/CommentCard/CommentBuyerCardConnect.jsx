import { connect } from "react-redux";
import { COMMENT_BUYER_CARD } from "../../../../../Redux/ComponentConstants";
import { mapStateToProps } from "../../../../../Redux/ToProps/mapStateToProps";
import { CommentBuyerCard } from "./CommentBuyerCard";

export const CommentBuyerCardConnect = connect(
  mapStateToProps(COMMENT_BUYER_CARD)
)(CommentBuyerCard);
