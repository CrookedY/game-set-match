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
  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: false,
        user: null,
        handleLoginClick: this.handleLoginClick.bind(this)
    };
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
                response.json().then(function (user) {
                  this.setState({
                    isLoggedIn: true,
                    user: user
                  });
                  this.props.history.push('/');
                }.bind(this));
            } else {
              alert('Your login details were incorrect');
            }
        }.bind(this)).catch(function() {
            alert('There was a problem logging in');
        });
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
