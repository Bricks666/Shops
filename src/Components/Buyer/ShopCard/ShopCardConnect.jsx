import { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { SHOP_CARD_BUYER } from "../../../Redux/ComponentConstants";
import { ShopCardBuyer } from "./ShopCardBuyer";

class ShopCardClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showComment: false,
      showCAS: false,
    };
  }
  toggleComment() {
    this.setState({ showComment: !this.state.showComment });
  }

  toggleCAS() {
    this.setState({ showCAS: !this.state.showCAS });
  }

  render() {
    return (
      <ShopCardBuyer
        {...this.props}
        showComment={this.state.showComment}
        showCAS={this.state.showCAS}
        toggleComment={this.toggleComment.bind(this)}
        toggleCAS={this.toggleCAS.bind(this)}
      />
    );
  }
}

export const ShopCardConnect = connect(mapStateToProps(SHOP_CARD_BUYER))(
  ShopCardClass
);
