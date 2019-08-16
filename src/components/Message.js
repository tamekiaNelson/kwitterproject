import React, { Component } from "react";
import { Icon, Feed, Card, Button } from "semantic-ui-react";
import {
  handleDeleteMessage,
  toggleLikeThenUpdateMessageById as toggleLike
} from "../actions";
import { connect } from "react-redux";

class Message extends Component {
  // made changes to add user who has posted a message

  render() {
    // console.log(this.props);
    const profilePaged = this.props.router === "/profile";
    return (
      <Feed.Event>
        <Card style={{ backgroundColor: "lightgrey", width: "100%" }}>
          <Card.Content>
            <Feed.Label>
              <img
                src="https://png.pngtree.com/svg/20161212/f93e57629c.svg"
                alt="alt text"
                style={{ height: 40, width: 40 }}
              />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                {this.props.displayName}
                {/* <Feed.Date>{moment(this.props.date).fromNow()}</Feed.Date> */}
                <br />
              </Feed.Summary>
              <Feed.Meta
                style={{
                  backgroundColor: "lightgrey",
                  overflowWrap: "break-word",
                  wordWrap: "break-word"
                }}
              >
                {this.props.text}
                <br />
                <br />
              </Feed.Meta>
              <br />
              {/* <Feed.Like>
                <button onClick={event => this.props.toggleLike(this.props.id)}>
                  <Icon name="like" />
                </button>
                {this.props.likes} Likes
                <br />
                <br />
              </Feed.Like> */}
              {profilePaged ? (
                <Button
                  onClick={event =>
                    this.props.handleDeleteMessage(this.props.id)
                  }
                  color="blue"
                >
                  <Icon name="delete" /> Delete Message{" "}
                </Button>
              ) : (
                ""
              )}
            </Feed.Content>
          </Card.Content>
        </Card>
        <br />
        <br />
      </Feed.Event>
    );
  }
}

const mapStateToProps = state => {
  return {
    router: state.router.location.pathname,
    message: state.messages.messages
  };
};

const mapDispatchToProps = {
  handleDeleteMessage,
  toggleLike
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
