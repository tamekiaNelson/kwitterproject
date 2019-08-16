import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile } from ".";
import Livefeed from "./UsersFeed";
import EditProfile from "./UpdateInfo";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <LoginForm />} />
          <Route exact path="/home" render={() => <Livefeed />} />
          <Route exact path="/profile" render={() => <UserProfile />} />
          <Route exact path="/editprofile" render={() => <EditProfile />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
