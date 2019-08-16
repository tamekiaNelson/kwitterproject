import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { logoutThenGoToLanding as logout } from "../actions";
import { connect } from "react-redux";

class Logout extends Component {

    clickHandler = e => {
        this.props.logout()
    }

    render(){
        return(
            <Button onClick={this.clickHandler}>Logout</Button>
        )
    }
}

export default connect(
    null,
    { logout }
  )(Logout);