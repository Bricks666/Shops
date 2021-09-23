import { Component } from "react";
import { renderList } from "../../renderList";
import { CASItem } from "./CASItem/CASItem";

export class CASList extends Component {
  componentDidMount() {
    if (this.props.CAS.length === 0) {
      this.props.loadCAS(this.props.address);
    }
  }

  render() {
    console.log(this.props.CAS);
    return (
      <>
        <p>Отзывы</p>
        <ul>
          {renderList(this.props.CAS, CASItem, {
            address: this.props.address,
          })}
        </ul>
      </>
    );
  }
}
