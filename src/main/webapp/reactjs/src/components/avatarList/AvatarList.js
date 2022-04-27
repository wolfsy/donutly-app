import React, { Component } from 'react'
import UserService from '../../services/UserService'

export default class AvatarList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         users: []
      }
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }

  render() {
    return (
      <div>AvatarList</div>
    )
  }

}
