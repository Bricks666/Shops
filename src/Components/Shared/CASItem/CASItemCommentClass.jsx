import { Component } from "react";
import { BottomWindow } from "../BottomWindow/BottomWindow";
import { Button } from "../Button/Button";
import { CASItem } from "./CASItem";
import { CommentListConnect } from "./CommentList/CommentListConnect";
import { Comment } from "../Comment/Comment";

export class CASItemCommentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComment: false,
    };
  }

  toggleShowWindow() {
    this.setState({ showComment: !this.state.showComment });
  }

  render() {
    return (
      <CASItem
        login={this.props.login}
        comment={this.props.comment}
        mark={this.props.mark}
        dislikes={this.props.dislikes}
        likes={this.props.likes}
      >
        <Button onClick={this.toggleShowWindow.bind(this)}>
          Показать комментарии
        </Button>
        {this.props.children}
        <BottomWindow condition={this.state.showComment}>
          <CommentListConnect
            comments={this.props.comments}
            shopAddress={this.props.shopAddress || this.props.address}
            CASId={this.props.CASId || this.props.id}
            CommentCard={this.props.CommentCard ?? Comment}
          />
        </BottomWindow>
      </CASItem>
    );
  }
}
