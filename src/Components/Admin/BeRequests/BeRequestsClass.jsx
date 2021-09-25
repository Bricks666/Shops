import { Component } from "react";
import { BeRequests } from "./BeRequests";

export class BeRequestsClass extends Component {
  componentDidMount() {
    if (this.props.requests.length === 0) {
      this.props.loadRequests();
    }
  }

  render() {
    return <BeRequests {...this.props} />;
  }
}
