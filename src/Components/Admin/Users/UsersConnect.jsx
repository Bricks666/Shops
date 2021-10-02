import { connect } from "react-redux";
import { USERS } from "../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Users } from "./Users";

export const UsersConnect = connect(
  mapStateToProps(USERS),
  mapDispatchToProps(USERS)
)(Users);
