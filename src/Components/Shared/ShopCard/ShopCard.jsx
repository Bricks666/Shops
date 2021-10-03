import { Component } from "react";
import { BottomWindow } from "../BottomWindow/BottomWindow";
import { SalesmenListConnect } from "../SalesmenList/SalesmenListConnnect";
import { Button } from "../Button/Button";

export const ShopCard = (props) => {
  return (
    <article>
      <h3>{props.shopAddress}</h3>
      <p>{props.city}</p>
      {props.children}
    </article>
  );
};

export class ShopCardWithSalesmen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSalesmen: false,
    };
  }

  toggleShowSalesmen() {
    this.setState({ showSalesmen: !this.state.showSalesmen });
  }

  render() {
    return (
      <ShopCard
        shopAddress={this.props.shopAddress || this.props.address}
        city={this.props.city}
      >
        <Button onClick={this.toggleShowSalesmen.bind(this)}>
          Показать продавцов
        </Button>
        {this.props.children}
        <BottomWindow condition={this.state.showSalesmen}>
          <SalesmenListConnect
            shopId={this.props.shopId || this.props.id}
            salesmen={this.props.salesmen}
            SalesmanCard={this.props.SalesmanCard}
            CASCard={this.props.CASCard}
          />
        </BottomWindow>
      </ShopCard>
    );
  }
}
