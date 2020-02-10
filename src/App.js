import React, { Suspense } from "react";
import "./App.css";
import { User } from "./User";
// To override spinner CSS eventually
// import { css } from "@emotion/core";
import { PacmanLoader } from "react-spinners";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  // TODO  Refactor for Hooks, React.lazy, and Suspense.
  render() {
    return (
      // Testing out Suspense, really trying to learn how it works.
      // Here I am using Suspense component to load a spinner before data is fetched from my API
      // However the spinner doesn't load, just the Users
      // tried to use React.lazy and each call to the API rendered a weird object. Not ideal.
      // Studying more tonight 2020/02/09
      <Suspense fallback={<PacmanLoader
        size={150}
        color={"#06d7d9"} />}>
        <div>
          <User />
          <User />
          <User />
          <User />
          <User />
        </div>
      </Suspense>
    );
  }
}

export default App;
