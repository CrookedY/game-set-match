// Main React Applications

import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Header from './Header.js'
import './App.css';
import './Leaderboardstyles.css';
import './Login.js'
import './mobile.css';

import { sendScores } from './sendScores.js';
import { editScores } from './editScores.js';
import { saveChanges } from './saveChanges.js';
import Main from './Main'
import { renderInitial } from './renderInitial';
// import {identifyUser} from './identifyUser.js'
// import LoginControl from './UserGreeting.js'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioChecked: 'radio1',
      data: '',
      isLoggedIn: false,
      loginHeaderMsg: 'Log In',
      user: ''
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    //renders submitted scores if user was logged in, will be blank if not
    
    renderInitial()

    //looks for whether the member is logged in via sessionStorage.
    //sessionStorage was needed as state wasn't persisted via different routes.
    const saved_loginHeaderMsg = sessionStorage.getItem("saved_loginHeaderMsg")
    const saved_isLoggedIn = sessionStorage.getItem("saved_isLoggedIn")
    const saved_user = sessionStorage.getItem("saved_USER")

    //if user is logged in, then we set the state of the app to be loggedIn. 
    if (saved_loginHeaderMsg !== null) {
      this.setState({ loginHeaderMsg: saved_loginHeaderMsg })
      this.setState({ isLoggedIn: saved_isLoggedIn })
      this.setState({ user: saved_user })
    }
  }


  handleLoginClick() {
    //needed to set self = this as calling this.setState with the '.then' method meant
    //that 'this' wasn't picking up the correct object.
    const self = this;

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
      if(response.ok){
      return response.json();
      }
      alert('Your login details were incorrect, please try again')
      return Promise.reject("Not logged in");

    }).then(function (myJson) {

      window.location.href = '/';

      self.setState({
        isLoggedIn: true,
        user: myJson.username,
        loginHeaderMsg: "Log Out"
      });

      //sets sesstionStorage to be logged in.
      sessionStorage.setItem('saved_loginHeaderMsg', self.state.loginHeaderMsg)
      sessionStorage.setItem('saved_isLoggedIn', self.state.isLoggedIn)
      sessionStorage.setItem('saved_user', self.state.user)

    });
  }

  handleLogout() {
    //sets state to be logged out. NB - needed to be a string rather than Boolean as setState changed it to be a string!
    if (this.state.isLoggedIn === 'true') {
      this.setState({
        isLoggedIn: false,
        loginHeaderMsg: 'Log In',
        user: ''
      })

      //sets session state to be blank
      sessionStorage.setItem('saved_loginHeaderMsg', 'Log In')
      sessionStorage.setItem('saved_isLoggedIn', false)
      sessionStorage.setItem('saved_user', '')

      //logs the user out. The endpoint is in app.js (rather than routes!)
      fetch('/api/logout', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        if (response.ok) {
          return response.json()
      }
      
      return Promise.reject("Not logged in");


        
      })
    //rerenders users scores - should be blank as we're logged out!
    renderInitial()
    }

    
  }
  handleOptionChange = (newRadio) => {
    this.setState({ radioChecked: newRadio })
  }

  // Handles Submit Button
  handleSubmit() {
    sendScores()
  }

  // Handles Edit Button
  handleEdit() {
    editScores()
  }

  // Works after edit button to save changes
  handleChanges() {
    saveChanges()
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        
        <Header loginHeaderMsg={this.state.loginHeaderMsg} handleLogout={this.handleLogout} />

        <Main handleLoginClick={this.handleLoginClick} isLoggedIn={this.state.isLoggedIn} />

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
