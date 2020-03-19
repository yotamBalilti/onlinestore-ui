import React, { Component } from 'react';
import UserService from '../../services/user.service'

export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        };
    }
    componentDidMount() {
        UserService
            .me()
            .then(response => response.json())
            .then(user => {
                console.log(user)
                this.setState({
                    profile: user
                });
            });
    }
    render() {
        return (
            <div>
                <h1>Welcome {this.state.profile.name}</h1>
                <h4>your Email is {this.state.profile.email}</h4>
                <h4>and you are {this.state.profile.age} years old</h4>
                <h4>if you want to change any of these details please click here</h4>
            </div>
        )
    }
}

export default Profile;
