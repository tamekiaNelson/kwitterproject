import React, { Component } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "../actions";
import HomeFeed from "./Timeline";
import { Card, Image, Grid, Segment } from "semantic-ui-react";
import MessageInput from "./MessageInput";
import UsersList from "./Users";
import { domain } from "../actions/constants";

//TODO: decide what will be displayed

class Livefeed extends Component {
  componentDidMount() {
    this.props.setUserInfo(this.props.id);
  }

  render() {
    return (
      <React.Fragment>
        <Grid columns="equal">
          <Grid.Column>
            <Segment.Group
              style={{
                backgroundColor: "#5D9DE600",
                margin: 20,
                padding: 1
              }}
            >
              <Card>
                <Image
                  size="medium"
                  bordered
                  style={{}}
                  src={this.props.pictureLocation}
                />

                <Segment
                  style={{
                    backgroundColor: "#5D9DE6",
                    opacity: 0.8,
                    margin: 1
                  }}
                >
                  <Card.Content>
                    <br />
                    <br />
                    <Card.Header>
                      Display Name: {this.props.displayName}
                    </Card.Header>
                    <Card.Description>
                      About Me: {this.props.about}
                    </Card.Description>
                  </Card.Content>
                </Segment>
              </Card>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment
              style={{
                backgroundColor: "#407DBA",
                margin: 20,
                opacity: 0.9,
                width: 680
              }}
            >
              <MessageInput />
              <br />
              <br />
            </Segment>
            <Segment
              style={{
                backgroundColor: "#407DBA",
                margin: 20,
                opacity: 0.9,
                width: 680
              }}
            >
              <HomeFeed />
              <br />
              <br />
            </Segment>
          </Grid.Column>
          <Grid.Column style={{ zIndex: "-1" }} />
          <Grid.Column>
            <Segment
              style={{
                backgroundColor: "#407DBA",
                margin: 20,
                opacity: 0.9
              }}
            >
              <UsersList />
            </Segment>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ auth, editProfile, messages }) {
  return {
    id: auth.login.id,
    displayName: editProfile.displayName,
    about: editProfile.about,
    pictureLocation: domain + editProfile.pictureLocation,
    // password: editProfile.password,
    lastUpdated: editProfile.createdAt
  };
}

const mapDispatchToProps = {
  setUserInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Livefeed);
