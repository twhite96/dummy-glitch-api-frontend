import React from 'react';
import './App.css';
import { Form, FormInput, FormGroup } from 'shards-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css'
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    userData: []
  }
  componentDidMount() {
    fetch('https://faker-api.glitch.me/api/user')
      .then(res => res.json())
      .then((data) => {
        this.setState({ userData: data })
      })
      .catch(console.log)
  }
  render() {
    return (
      <Form>
        <FormGroup>
          <label htmlFor="#username">Username</label>
          <FormInput id="#username" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#password">Password</label>
          <FormInput type="password" id="#password" placeholder="Password" />
        </FormGroup>
      </Form>
    )
  }
}

export default App;
