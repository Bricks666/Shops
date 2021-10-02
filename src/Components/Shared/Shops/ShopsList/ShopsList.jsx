import { Component } from "react";
import { renderList } from "../../renderList";

export class ShopsList extends Component {
  componentDidMount() {
    this.props.loadShops();
  }

  render() {
    return <ul>{renderList(this.props.shops, this.props.ShopCard)}</ul>;
  }
}
