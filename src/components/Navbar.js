import React, { Component } from "react";
import { Menu, List } from "semantic-ui-react";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

class Navbar extends Component {
  state = { activeItem: "home" };

  render() {
    const { activeItem } = this.state;
    return (
      <List>
        <Menu style={{ backgroundColor: "#5D9DE6" }}>
          <Link to="/home">
            <Menu.Item name="home" active={activeItem === "home"} />
          </Link>
          <Link to="/profile">
            <Menu.Item name="profile" active={activeItem === "profile"} />
          </Link>
          {this.props.auth.login ? <Logout /> : ""}
        </Menu>
      </List>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Navbar);
