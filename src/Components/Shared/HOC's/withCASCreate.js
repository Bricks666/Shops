import { Component as ReactComponent } from "react";
import { NewCASConnect } from "./NewCAS/NewCASConnect";
import { Button } from "../Button/Button";
import { ModalWindow } from "../ModalWindow/ModalWindow";

export const withCASCreate = (Component) => {
  return class WithCASCreate extends ReactComponent {
    constructor(props) {
      super(props);

      this.state = {
        showCASCreate: false,
      };
    }

    toggleShowCASCreate() {
      this.setState({ showCASCreate: !this.state.showCASCreate });
    }

    render() {
      return (
        <Component {...this.props}>
          <Button onClick={this.toggleShowCASCreate.bind(this)}>
            Написать отзыв
          </Button>
          {this.props.children}
          <ModalWindow
            condition={this.state.showCASCreate}
            close={this.toggleShowCASCreate.bind(this)}
          >
            <NewCASConnect
              address={this.props.address || this.props.shopAddress}
            />
          </ModalWindow>
        </Component>
      );
    }
  };
};
