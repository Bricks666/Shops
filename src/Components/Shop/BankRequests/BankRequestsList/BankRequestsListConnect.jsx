import { Component } from "react";
import { connect } from "react-redux";
import { BANK_REQUESTS_LIST } from "../../../../Redux/ComponentConstants";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { BankRequestsList } from "./BankRequestsList";

class BankRequestsListClass extends Component {
  componentDidMount() {
    if (this.props.requests.length === 0) {

      this.props.loadBankRequest(this.props.id);
    }
  }

  render() {
    return <BankRequestsList {...this.props} />;
  }
}

export const BankRequestsListConnect = connect(
  mapStateToProps(BANK_REQUESTS_LIST),
  mapDispatchToProps(BANK_REQUESTS_LIST)
)(BankRequestsListClass);
