import { Component } from "react";
import { renderList } from "../renderList";

export const Salesmen = (props) => {

  return (
    <>
      <p>Продавцы</p>
      <ul>
        {renderList(props.salesmen, props.SalesmanCard, {
          CASCard: props.CASCard,
        })}
      </ul>
    </>
  );
};

export class SalesmenList extends Component {
  componentDidMount() {
    if (this.props.salesmen.length === 0) {
      this.props.loadSalesmen(this.props.shopId);
    }
  }

  render() {
    return <Salesmen {...this.props} />;
  }
}
