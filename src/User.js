import React from 'react'

class User extends React.Component {

  state = {
    userData: []
  }
  render() {
    componentDidMount() {
    fetch('https://faker-api.glitch.me/api/user')
      .then(res => res.json())
      .then((data) => {
        this.setState({ userData: data })
      })
      .catch(console.log)
    }
  }
}


export default User;
