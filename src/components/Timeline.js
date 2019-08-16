import React, { Component } from "react";
import Message from "./Message";
import { Feed } from "semantic-ui-react";
import { getMessages } from "../actions";
import { connect } from "react-redux";

class HomeFeed extends Component {
  componentDidMount() {
    this.props.getMessages();
    this.messagePollingID = setInterval(this.props.getMessages, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.messagePollingID);
  }

  render() {
    const messages = this.props.message.map((message, index) => (
      <Message
        key={index}
        date={message.updatedAt}
        text={message.text}
        // likes={message.likes.length}
        userName={message.username}
        displayName={message.displayName}
        id={message.id}
      />
    ));
    // console.log(this.props.message);
    return (
      <React.Fragment>
        <Feed>{messages}</Feed>
        <br />
        <br />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  message: state.messages.messages
});

const mapDispatchToProps = {
  getMessages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeFeed);
