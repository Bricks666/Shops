import { Component } from "react";
import { BuyerRequests } from "./BuyerRequests";

export class BuyerRequestsClass extends Component {
  componentDidMount() {
    if (this.props.buyer.length === 0) {
      this.props.loadRequests();
    }
  }

  render() {
    return <BuyerRequests {...this.props} />;
  }
}
