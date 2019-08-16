import React from "react";
import { Component } from "react";
import { Button } from "semantic-ui-react";
import { registerThenGoToUserProfile as register } from "../actions/register.js";
import { connect } from "react-redux";

export class Registration extends Component {
  state = { username: "", displayName: "", password: "" };

  handleRegister = (e, handleLogin) => {
    e.preventDefault();
    this.props.register(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          autoFocus
          required
          onChange={this.handleChange}
        />
        <form onSubmit={this.handleRegister}>
          <label htmlFor="displayName">Display Name:</label>
          <input
            type="text"
            name="displayName"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
             <br></br>
             <br></br>
          <Button className="ui big button">
            <i className="signup icon" />
            Submit
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    registerLoading: auth.registerLoading,
    registerError: auth.registerError
  };
}

const mapDispatchToProps = {
  register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
