import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { setUserInfo, editProfile } from "../actions";

class EditProfile extends Component {
  componentDidMount() {
    this.props.setUserInfo(this.props.id);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditProfile = event => {
    event.preventDefault();
    console.log(this.props.id);
    let inputObj = {
      displayName: this.state.displayName,
      about: this.state.about
      // password: this.state.password
    };
    this.props.editProfile(inputObj);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="login__Box">
            <div
              className="ui placeholder segment"
              style={{ backgroundColor: "#5D9DE6" }}
            >
              <div>
                <div className="column">
                  <div className="ui form" style={{ height: 500, width: 350 }}>
                    <div className="field">
                      <h1 className="login__Text">Edit Profile</h1>
                      <form onSubmit={this.handleEditProfile}>
                        <label htmlFor="displayname">Edit Display Name:</label>
                        <input
                          type="text"
                          name="displayName"
                          autoFocus
                          required
                          onChange={this.handleChange}
                        />
                        {/* <br />
                        <br />
                        <label htmlFor="password">Edit Password:</label>
                        <input
                          type="password"
                          name="password"
                          required
                          onChange={this.handleChange} 
                        />*/}
                        <br />
                        <br />
                        <label htmlFor="about">Edit Bio</label>
                        <input
                          type="text"
                          name="about"
                          required
                          onChange={this.handleChange}
                        />
                        <br />
                        <br />
                        <Button
                          type="submit"
                          value="submit"
                          onSubmit={this.handleEditProfile}
                          color="teal"
                        >
                          Save Edits
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ auth, editProfile }) {
  return {
    id: auth.login.id,
    displayName: editProfile.displayName,
    about: editProfile.about,
    username: editProfile.username,
    // password: editProfile.password,
    lastUpdated: editProfile.lastUpdated
  };
}

const mapDispatchToProps = {
  setUserInfo,
  editProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
