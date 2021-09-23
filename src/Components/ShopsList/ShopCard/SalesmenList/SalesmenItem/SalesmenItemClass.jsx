import { Component } from "react";
import { SalesmenItem } from "./SalesmenItem";

export class SalesmenItemClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCAS: false,
      showWindow: false,
    };
  }

  closeComment() {
    this.setState({ showWindow: false });
  }
  showComment() {
    this.setState({ showWindow: true });
  }
  toggleCAS() {
    debugger;
    this.setState({ showCAS: !this.state.showCAS });
  }
  render() {
    debugger;
    return (
      <SalesmenItem
        {...this.props}
        showComment={this.state.showWindow}
        showCAS={this.state.showCAS}
        toggleCAS={this.toggleCAS.bind(this)}
        openComment={this.showComment.bind(this)}
        closeComment={this.closeComment.bind(this)}
      />
    );
  }
}
