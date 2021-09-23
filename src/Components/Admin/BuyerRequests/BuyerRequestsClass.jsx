import { Component } from "react";
import { BuyerRequests } from "./BuyerRequests";

export class BuyerRequestsClass extends Component {
  componentDidMount() {
    this.props.loadRequests();
  }

  render() {
    return <BuyerRequests {...this.props} />;
  }
}
