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

    this.state = {
      radioChecked: 'radio1',
      data: '',
      isLoggedIn: false,
      loginHeaderMsg: 'Log In',
      user: ''
    };
    this.handleLoginClick = this.handleLoginClick.bind(this); 
  }
  
  componentDidMount(){
    renderInitial()
    const saved_loginHeaderMsg = sessionStorage.getItem("saved_loginHeaderMsg")
    const saved_isLoggedIn = sessionStorage.getItem("saved_isLoggedIn")
    const saved_user = sessionStorage.getItem("saved_USER")
        
    
    if(saved_loginHeaderMsg !==null){
      this.setState({loginHeaderMsg: saved_loginHeaderMsg})
      this.setState({isLoggedIn: saved_isLoggedIn})
      this.setState({user: saved_user})
    }
  }

 
  handleLoginClick() {

    const self =this;
    console.log(self.state)

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
      return response.json();  
    }).then(function(myJson){
      
            window.location.href = '/';
            console.log(myJson)
           
            self.setState({
              isLoggedIn: true, 
              user: myJson.username,
              loginHeaderMsg: "Log Out"
            });
            
            sessionStorage.setItem('saved_loginHeaderMsg',self.state.loginHeaderMsg)
            sessionStorage.setItem('saved_isLoggedIn',self.state.isLoggedIn)
            sessionStorage.setItem('saved_user',self.state.user)

            // todo pass context to application
        // } else {
        //     // invalid login
        //     window.location.href = '/login'
        // }
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
