import { connect } from "react-redux";
import { ACCOUNT } from "../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { Account } from "./Account";

export const AccountConnect = connect(
  mapStateToProps(ACCOUNT),
  mapDispatchToProps(ACCOUNT)
)(Account);
