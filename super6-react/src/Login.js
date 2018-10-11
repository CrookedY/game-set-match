import React, { Component } from 'react';
import './App.css';

class Login extends Component {

      render() {

        return(
            <div>
                <form>
                    <label>UserID:</label>
                    <input type="text" placeholder="User name" name="username" id="username"/>
                    <label>User Password:</label>
                    <input type="password" placeholder="Password" name="password" id="password"/>
                    <button type="button" onClick={this.props.handleLoginClick}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;

