import { Component as ReactComponent } from "react";
import { Button } from "../Button/Button";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { NewCommentConnect } from "./NewComment/NewCommentConnect";

export const withCommentCreate = (Component) => {
  return class ComponentWithCommentCreator extends ReactComponent {
    constructor(props) {
      super(props);
      this.state = {
        showCommentCreator: false,
      };
    }

    toggleShowCommentCreator() {
      this.setState({ showCommentCreator: !this.state.showCommentCreator });
    }

    render() {

      return (
        <Component {...this.props}>
          <Button onClick={this.toggleShowCommentCreator.bind(this)}>
            Написать комментарий
          </Button>
          {this.props.children}
          <ModalWindow
            condition={this.state.showCommentCreator}
            close={this.toggleShowCommentCreator.bind(this)}
          >
            <NewCommentConnect
              shopAddress={this.props.shopAddress || this.props.address}
              CASId={this.props.CASId || this.props.id}
            />
          </ModalWindow>
        </Component>
      );
    }
  };
};
