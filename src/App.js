import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import { Card, CardBody } from 'shards-react';
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";


const override = css`
  margin: 28rem 58rem;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      isLoaded: false
      // isClicked: true
    }
  }

  componentDidMount() {
    fetch('https://faker-api.glitch.me/api/user')
      .then(res => res.json())
      .then(data => {
        this.setState({
          userData: data,
          isLoaded: true,
        })
      }).catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { isLoaded } = this.state;
    if (!isLoaded)
      return <div><PacmanLoader
        css={override}
        size={50}
        //size={"150px"} this also works
        color={"#06d7d9"}
      /></div>;
    const users = Object.keys(this.state.userData);
    console.log(users);
    let newUser = users.map((user, i) => {
      return (
        <div>
          <Card className="d-flex m-3">
            <CardBody>
              <h5 className="card-title">{this.state.userData.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{this.state.userData.email}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{this.state.userData.address}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{this.state.userData.bio}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{this.state.userData.image}</h6>
            </CardBody>
          </Card>
        </div>
      )
    });
    return (

      <div>

        <center><h1>Contact List</h1></center>
        <div>{newUser}</div>

      </div>
    )
  }
}


export default App;
