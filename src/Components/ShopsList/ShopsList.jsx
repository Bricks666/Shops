import { Component } from "react";
import { renderList } from "../Shared/renderList";
import { ShopCardConnect } from "./ShopCard/ShopCardConnect";

export class ShopsList extends Component {
  componentDidMount() {
    if (this.props.shops.length === 0) {
      this.props.loadShops();
    }
  }

  render() {
    return (
      <section>
        <h3>Shops</h3>
        <ul>{renderList(this.props.shops, ShopCardConnect)}</ul>
      </section>
    );
  }
}
