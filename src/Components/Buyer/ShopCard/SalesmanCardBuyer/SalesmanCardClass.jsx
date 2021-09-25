import { Component } from "react";
import { SalesmanCardBuyer } from "./SalesmanCardBuyer";

export class SalesmanCardClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCAS: false,
      showWindow: false,
    };
  }

  toggleComment() {
    this.setState({ showWindow: !this.state.showWindow });
  }
  toggleCAS() {
    this.setState({ showCAS: !this.state.showCAS });
  }
  render() {
    return (
      <SalesmanCardBuyer
        {...this.props}
        showComment={this.state.showWindow}
        showCAS={this.state.showCAS}
        toggleCAS={this.toggleCAS.bind(this)}
        toggleComment={this.toggleComment.bind(this)}
      />
    );
  }
}
