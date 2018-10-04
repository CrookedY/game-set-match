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
// import Login from './Login.js';
// import {identifyUser} from './identifyUser.js'
// import LoginControl from './UserGreeting.js'



class App extends Component {
  constructor() {
    super();
    this.state = {
      radioChecked: 'radio1'
    }
  }

  handleOptionChange = (newRadio) => {
    this.setState({ radioChecked: newRadio })
  }

// handleUserID(){
//   identifyUser()
// }
handleSubmit(){
  sendScores()
}

handleEdit(){
  editScores()
}

handleChanges(){
  saveChanges()
}

  render() {



    return (
      <div className="App">
        <Header />

            <Main/>

      </div>

    );
  }
}

export default App;
