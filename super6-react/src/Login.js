import React, { Component } from 'react';
import './App.css';


var random = "todor"

class Login extends Component {
    constructor(props) {
        super(props);
        
        
      }
    
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

