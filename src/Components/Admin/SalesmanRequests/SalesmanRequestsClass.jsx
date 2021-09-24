import { Component } from "react";
import { SalesmanRequests } from "./SalesmanRequests";

export class SalesmanRequestsClass extends Component {
  componentDidMount() {
    if (this.props.salesman.length === 0) {
      this.props.loadRequests();
    }
  }

  render() {
    return <SalesmanRequests {...this.props} />;
  }
}
