import React from "react";
import { User } from "./User";
// To override spinner CSS eventually
// import { css } from "@emotion/core";
import { PacmanLoader } from "react-spinners";

class App extends React.Component {
  constructor(props) {
    super(props);
    // setting the state the spinner and User objects
    // the empty objects will be filled with response data from my API
    this.state = {
      status: "idle",
      firstUser: {},
      secondUser: {},
      thirdUser: {},
      fourthUser: {},
      fifthUser: {}
    };
  }


  // create a method to fetch a user from a promise
  getUser() {
    return fetch("https://faker-api.glitch.me/api/user").then(res =>
      res.json()
    );
  }

  userList() {
    const {
      firstUser,
      secondUser,
      thirdUser,
      fourthUser,
      fifthUser
    } = this.state;
    return (
      <div>
        <User user={firstUser} />
        <User user={secondUser} />
        <User user={thirdUser} />
        <User user={fourthUser} />
        <User user={fifthUser} />
      </div>
    );
  }

  requestRender(status) {
    const renderStatuses = {
      idle: () => null,
      loading: () => <PacmanLoader size={150} color={"#06d7d9"} />,
      loaded: () => this.userList(),
      error: () => <h1>An error occurred!</h1>
    };
    return renderStatuses[status];
  }

  componentDidMount() {
    this.setState({ status: "loading" });
    Promise.all([
      this.getUser(),
      this.getUser(),
      this.getUser(),
      this.getUser(),
      this.getUser()
    ])
      .then(([firstUser, secondUser, thirdUser, fourthUser, fifthUser]) => {
        this.setState({
          status: "loaded",
          firstUser,
          secondUser,
          thirdUser,
          fourthUser,
          fifthUser
        });
      })
      .catch(() => {
        this.setState({ status: "error" });
      });
  }

  // TODO  Refactor for Hooks, React.lazy, and Suspense.
  render() {
    const { status } = this.state;
    return this.requestRender(status)();
  }
}

export default App;
