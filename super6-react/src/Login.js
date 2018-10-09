import React, { Component } from 'react';
import {UserContext} from './UserContext.js';
import './App.css';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <UserContext.Consumer>
            {({isLoggedIn, user, handleLoginClick}) => (
            <div>
                {isLoggedIn ?
                <p>You are already logged in</p>
                :
                <form>
                    <label>UserID:</label>
                    <input type="text" placeholder="User name" name="username" id="username"/>
                    <label>User Password:</label>
                    <input type="password" placeholder="Password" name="password" id="password"/>
                    <button type="button" onClick={handleLoginClick}>Login</button>
                </form>
                }
            </div>
            )}
            </UserContext.Consumer>
        )
    }
}

export default Login;

