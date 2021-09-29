import { Component } from "react";
import { renderList } from "../renderList";

export class CASList extends Component {
  componentDidMount() {
    if (this.props.CAS.length === 0) {
      this.props.loadCAS(this.props.address);
    }
  }

  render() {
    return (
      <>
        <p>Отзывы</p>
        <ul>
          {renderList(this.props.CAS, this.props.CASCard, {
            address: this.props.address,
          })}
        </ul>
      </>
    );
  }
}
