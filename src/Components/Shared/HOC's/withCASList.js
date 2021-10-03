import { Component as ReactComponent } from "react";
import { BottomWindow } from "../BottomWindow/BottomWindow";
import { Button } from "../Button/Button";
import { CASListConnect } from "../CASList/CASListConnect";

export const withCASList = (CASCard) => {
  return (Component) => {
    return class WithCASList extends ReactComponent {
      constructor(props) {
        super(props);
        this.state = {
          showCAS: false,
        };
      }

      toggleShowCAS() {
        this.setState({ showCAS: !this.state.showCAS });
      }

      render() {

        console.log(this.props, "WITH CAS LIST");
        return (
          <Component {...this.props}>
            <Button onClick={this.toggleShowCAS.bind(this)}>
              Показать отзывы
            </Button>
            {this.props.children}
            <BottomWindow condition={this.state.showCAS}>
              <CASListConnect
                address={this.props.address || this.props.shopAddress}
                CASCard={CASCard}
              />
            </BottomWindow>
          </Component>
        );
      }
    };
  };
};
