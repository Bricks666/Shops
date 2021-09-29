import { Component } from "react";
import { CASBuyerItem } from "./CASBuyerItem";
import { ModalWindow } from "../../../Shared/ModalWindow/ModalWindow";
import { Button } from "../../../Shared/Button/Button";
import { NewCommentConnect } from "./NewComment/NewCommentConnect";

export class CASBuyerItemClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newComment: "",
      showNewComment: false,
    };
  }
  toggleShowComment() {
    debugger;
    this.setState({
      showNewComment: !this.state.showNewComment
    });
    console.log(this.state);
  }

  inputNewComment(evt) {
    this.setState({ newComment: evt.target.value });
    console.log(this.state);
  }

  render() {
    console.log(this.props);
    return (
      <CASBuyerItem {...this.props}>
        <Button onClick={this.toggleShowComment.bind(this)}>
          Написать новый комментарий
        </Button>
        <ModalWindow
          condition={this.state.showNewComment}
          close={this.toggleShowComment.bind(this)}
        >
          <NewCommentConnect
            shopAddress={this.props.address}
            CASId={this.props.id}
            input={this.inputNewComment.bind(this)}
            comment={this.state.newComment}
          />
        </ModalWindow>
      </CASBuyerItem>
    );
  }
}
