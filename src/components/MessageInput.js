import React, { Component } from "react";
import { Comment, Form } from "semantic-ui-react";
import { postMessage } from "../actions";
import { connect } from "react-redux";

class MessageInput extends Component {
  state = { text: "" };
  messageLength = false;

  handleSubmit = event => {
    let { text } = this.state;

    event.preventDefault();

    if (text.length >= 2 && text.length <= 255) {
      this.props.postMessage(this.state);
      event.target.text.value = "";
      this.setState({ text: "" });
    }
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    const text = this.state;
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: "#5D9DE6"
            // width: 680,
          }}
        >
          <Comment.Group>
            <Comment>
              <Comment.Content
                style={{
                  margin: 5
                }}
              >
                {/* <Comment.A uthor as="a">User</Comment.Author>
                <Comment.Metadata>
                  <div>2 days ago</div>
                </Comment.Metadata> */}
                <Comment.Text>Status:</Comment.Text>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group className="sendMessageBox">
                    <Form.Input
                      className="messageInputBox"
                      placeholder="What's on your mind?"
                      name="text"
                      onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <Form.Button
                      content="Submit"
                      labelPosition="left"
                      icon="edit"
                      value={text}
                      color="teal"
                      type="submit"
                    />
                  </Form.Group>
                </Form>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  postMessage
};

function mapStateToProps({ messages }) {
  return {
    messages: messages.messages
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput);
