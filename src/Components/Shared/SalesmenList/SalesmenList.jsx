import { Component } from "react";
import { renderList } from "../renderList";

export class SalesmenList extends Component {
  componentDidMount() {
    if (this.props.salesmen.length === 0) {
      this.props.loadSalesmen(this.props.shopId);
    }
  }

  render() {
    return (
      <>
        <p>Продавцы</p>
        <ul>{renderList(this.props.salesmen, this.props.salesmanCard)}</ul>
      </>
    );
  }
}
