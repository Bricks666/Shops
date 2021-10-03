import { Component } from "react";
import { connect } from "react-redux";
import { USERS_LIST } from "../../../../Redux/ComponentConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { UsersList } from "./UsersList";

class UsersListClass extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {

    return <UsersList {...this.props} />;
  }
}

export const UsersListConnect = connect(
  mapStateToProps(USERS_LIST),
  mapDispatchToProps(USERS_LIST)
)(UsersListClass);
