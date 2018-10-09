import React, { Component } from 'react';
import './App.css';

var random = "todor"

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.state = {isLoggedIn: false, 
                      user: ""  
        };
      }
     
      componentDidUpdate(){
          random = this.state.user
      }

      handleLoginClick() {
       
        fetch('/api/login', {
            method: 'post',
            body: JSON.stringify({
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            if (response.ok) {
                this.state = {isLoggedIn: true, user: response.json()};
                window.location.href = '/';
                random = response.json().id
                // todo pass context to application
            } else {
                // invalid login
                window.location.href = '/login'
            }
        }.bind(this));
      }

      render() {
        return(
            <div>
                <form>
                    <label>UserID:</label>
                    <input type="text" placeholder="User name" name="username" id="username"/>
                    <label>User Password:</label>
                    <input type="password" placeholder="Password" name="password" id="password"/>
                    <button type="button" onClick={this.handleLoginClick}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;

