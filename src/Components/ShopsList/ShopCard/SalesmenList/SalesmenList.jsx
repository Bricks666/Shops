import { Component } from "react";
import { renderList } from "../../../Shared/renderList";
import { SalesmenItemClass } from "./SalesmenItem/SalesmenItemClass";

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
        <ul>{renderList(this.props.salesmen, SalesmenItemClass)}</ul>
      </>
    );
  }
}
