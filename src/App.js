import * as React from "react";
import "./App.css";
import { User } from "./User";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }
  render() {
    return (
      <div>

        <div>
          <User />
          <User />
          <User />
          <User />
          <User />
        </div>
      </div>
    );
  }
}

export default App;
