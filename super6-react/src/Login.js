import React, { Component } from 'react';
import {UserContext} from './UserContext.js';
import './App.css';

class Login extends Component {
    constructor(props) {
        super(props);

      }


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
                // todo pass context to application
            } else {
                // invalid login
                window.location.href = '/login'
            }
        }.bind(this));
      }


      render() {
        return(
            <UserContext.Consumer>
            {({isLoggedIn, user, handleLoginClick}) => (
            <div>
                <form>
                    <label>UserID:</label>
                    <input type="text" placeholder="User name" name="username" id="username"/>
                    <label>User Password:</label>
                    <input type="password" placeholder="Password" name="password" id="password"/>
                    <button type="button" onClick={handleLoginClick}>Login</button>
                </form>
            </div>
            )}
            </UserContext.Consumer>
        )
    }
}

export default Login;

