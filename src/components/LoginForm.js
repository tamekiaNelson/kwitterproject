import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Spinner from "react-spinkit";
import "../index.css";
import Registration from "./Registration";

class LoginForm extends Component {
  state = { username: "", password: "", active: false };

  handleToggle = event => {
    event.preventDefault();
    this.setState({
      active: !this.state.active
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    if (this.state.active) {
      return (
        <React.Fragment>
          <div style={{}}>
            <div className="login__Box">
              <div
                id="test"
                className="ui placeholder segment"
                style={{ backgroundColor: "#5D9DE6" }}
              >
                <div className="ui two column very relaxed stackable grid">
                  <div className="column">
                    <div className="ui form">
                      <div className="field">
                        <h1 className="login__Text">Login</h1>
                        <form onSubmit={this.handleLogin}>
                          <label htmlFor="username">Username:</label>
                          <input
                            type="text"
                            name="username"
                            autoFocus
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
                          <Button 
                            className=""
                            type="submit"
                            disabled={isLoading}
                            color='teal'
                          >
                            Login
                          </Button>
                        </form>
                        {isLoading && <Spinner name="circle" color="blue" />}
                        {err && <p style={{ color: "red" }}>{err}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="middle aligned column">
                    <div className="ui form">
                      <div className="field">
                        <Button
                          className=""
                          onClick={this.handleToggle}
                          color='teal'
                        >
                          Register?
                        </Button>
                        <Registration />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div>
            <div className="login__Box">
              <div
                className="ui placeholder segment"
                style={{ backgroundColor: "#5D9DE6" }}
              >
                <div className="ui two column very relaxed stackable grid">
                  <div className="column">
                    <div className="ui form">
                      <div className="field">
                        <h1 className="login__Text">Login</h1>
                        <form onSubmit={this.handleLogin}>
                          <label htmlFor="username">Username:</label>
                          <input
                            type="text"
                            name="username"
                            autoFocus
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

                          <Button 
                            className=""
                            type="submit"
                            disabled={isLoading}
                            color='teal'
                          >
                            Login
                          </Button>
                        </form>
                        {isLoading && <Spinner name="circle" color="blue" />}
                        {err && <p style={{ color: "red" }}>{err}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="middle aligned column">
                    <Button
                      className="registerButton"
                      onClick={this.handleToggle}
                      color='teal'
                    >
                      Register Here
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { login }
)(LoginForm);
