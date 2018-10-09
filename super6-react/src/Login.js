import React, { Component } from 'react';
import {UserContext} from './UserContext.js';
import './App.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.state = {isLoggedIn: false};
      }


      render() {
        return(
            <UserContext.Consumer>
            {({isLoggedIn, user, handleLogin}) => (
            <div>
                <form>
                    <label>UserID:</label>
                    <input type="text" placeholder="User name" name="username" id="username"/>
                    <label>User Password:</label>
                    <input type="password" placeholder="Password" name="password" id="password"/>
                    <button type="button" onClick={handleLogin}>Login</button>
                </form>
            </div>
            )}
            </UserContext.Consumer>
        )
    }
}

export default Login;

