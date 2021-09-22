import { Component } from "react";
import { renderList } from "../../renderList";
import { CASItem } from "./CASItem/CASItem";

export class CASList extends Component {
  componentDidMount() {
    if (this.props.complainsAndSuggestions.length === 0) {
      this.props.loadCAS(
        this.props.address,
        this.props.shopId,
        this.props.isSalesman
      );
    }
  }

  render() {
    return (
      <>
        <p>Отзывы</p>
        <ul>
          {renderList(this.props.complainsAndSuggestions, CASItem, {
            address: this.props.address,
            isSalesman: this.props.isSalesman,
          })}
        </ul>
      </>
    );
  }
}
