// Main React Applications

import React, { Component } from 'react';
import Header from './Header.js'
import Forms from './Forms.js'
import {Container, Col, Row } from 'react-grid-system'
import './App.css';
import './Leaderboardstyles.css';

import './mobile.css';

import {sendScores} from './sendScores.js';
import {editScores} from './editScores.js';
import {saveChanges} from './saveChanges.js';
import Leaderboard from './Leaderboard.js';
import Main from './Main'
import SuperSixForm from './SuperSixForm.js'
import {UserContext} from './UserContext.js';
// import {identifyUser} from './identifyUser.js'
// import LoginControl from './UserGreeting.js'



class App extends Component {
  constructor() {
    super();
    this.state = {
        isLoggedIn: false,
        user: null,
        handleLoginClick: this.handleLoginClick
    };
  }

    handleLoginClick(username, password) {
        fetch('/api/login', {
            method: 'post',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            if (response.ok) {
                this.setState({
                    isLoggedIn: true,
                    user: response.json()
                });
                window.location.href = '/';
                // todo pass context to application
            } else {
                // invalid login
            }
        }.bind(this));
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
    return (
      <UserContext.Provider value={this.state}>
        <div className="App">
          <Header />
          <Main/>
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
