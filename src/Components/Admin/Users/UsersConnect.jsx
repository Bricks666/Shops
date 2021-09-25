import { Component } from "react";
import { connect } from "react-redux";
import { USERS } from "../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Users } from "./Users";

class UsersClass extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    return <Users users={this.props.users} />;
  }
}

export const UsersConnect = connect(
  mapStateToProps(USERS),
  mapDispatchToProps(USERS)
)(UsersClass);
