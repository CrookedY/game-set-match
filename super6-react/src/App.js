// Main React Applications

import React, { Component } from 'react';
import Header from './Header.js'
import Forms from './Forms.js'
import {Container, Col, Row } from 'react-grid-system'
import './App.css';
import './Leaderboardstyles.css';
import './Login.js'
import './mobile.css';

import {sendScores} from './sendScores.js';
import {editScores} from './editScores.js';
import {saveChanges} from './saveChanges.js';
import Leaderboard from './Leaderboard.js';
import Main from './Main'
import SuperSixForm from './SuperSixForm.js'
import { renderInitial } from './renderInitial';
// import {identifyUser} from './identifyUser.js'
// import LoginControl from './UserGreeting.js'



class App extends Component {
  constructor(props) {
    super(props);
    
    this.handleLoginClick = this.handleLoginClick.bind(this);

    this.state = {
      radioChecked: 'radio1',
      data: '',
      isLoggedIn: false,
      loginHeaderMsg: 'Log In',
      user: ''
    }
    
  }
  
  componentDidMount(){
    renderInitial()
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
            this.setState({
              isLoggedIn: true, 
              user: response.json(),
              loginHeaderMsg: "Log Out"
            });
            
            
            window.location.href = '/';
            // random = response.json().id
            // todo pass context to application
        } else {
            // invalid login
            window.location.href = '/login'
        }
    });
  }

  handleOptionChange = (newRadio) => {
    this.setState({ radioChecked: newRadio })
  }

// Handles Submit Button
handleSubmit(){
  sendScores()
}

// Handles Edit Button
handleEdit(){
  editScores()
}

// Works after edit button to save changes
handleChanges(){
  saveChanges()
}

  render() {

    console.log(this.state.loginHeaderMsg)

    return (
      <div className="App">
        <Header loginHeaderMsg = {this.state.loginHeaderMsg}/>

            <Main handleLoginClick = {this.handleLoginClick} isLoggedIn={this.state.isLoggedIn}/>

      </div>

    );
  }
}

export default App;
