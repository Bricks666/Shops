import { Component } from "react";
import { connect } from "react-redux";
import { SHOP_CARD } from "../../../Redux/ActionsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { ShopCard } from "./ShopCard";

class ShopCardClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWindow: false,
    };
  }
  close() {
    this.setState({ showWindow: false });
  }

  show() {
    this.setState({ showWindow: true });
  }

  render() {
    return (
      <ShopCard
        {...this.props}
        condition={this.state.showWindow}
        close={this.close.bind(this)}
        show={this.show.bind(this)}
      />
    );
  }
}

export const ShopCardConnect = connect(
  mapStateToProps(SHOP_CARD),
  mapDispatchToProps(SHOP_CARD)
)(ShopCardClass);
