import { Component } from "react";
import { renderList } from "../../renderList";

export class CommentList extends Component {
  componentDidMount() {
    if (this.props.comments.length === 0) {
      this.props.loadComments(this.props.shopAddress, this.props.CASId);
    }
  }

  render() {

    return (
      <>
        <h4>Комментарии</h4>
        <ul>
          {renderList(this.props.comments, this.props.CommentCard, {
            shopAddress: this.props.shopAddress,
            CASId: this.props.CASId,
          })}
        </ul>
      </>
    );
  }
}
