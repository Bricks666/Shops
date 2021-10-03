import { connect } from "react-redux";
import { mapStateToProps } from "../../../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../../../Redux/ToProps/mapDispatchToProps";
import { FREE_ADDRESSES } from "../../../../../Redux/ComponentConstants";
import { Component } from "react";
import { FreeAddressesList } from "./FreeAddressesList";

class FreeAddressesClass extends Component {
  componentDidMount() {
    if (this.props.addresses.length === 0) {

      this.props.loadFreeAddresses();
    }
  }

  render() {
    return <FreeAddressesList {...this.props} />;
  }
}

export const FreeAddressesListConnect = connect(
  mapStateToProps(FREE_ADDRESSES),
  mapDispatchToProps(FREE_ADDRESSES)
)(FreeAddressesClass);
