import { Component } from "react";
import { renderList } from "../renderList";
import { CASItemConnect } from "./CASItem/CASItemConnect";

export class CASList extends Component {
  componentDidMount() {
    if (this.props.CAS.length === 0) {
      this.props.loadCAS(this.props.address);
    }
  }

  render() {
    ;
    return (
      <>
        <p>Отзывы</p>
        <ul>
          {renderList(this.props.CAS, CASItemConnect, {
            address: this.props.address,
          })}
        </ul>
      </>
    );
  }
}
