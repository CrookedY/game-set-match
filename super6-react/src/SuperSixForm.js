// Displays the games available to bet on by taking them from mongodb and also display available buttons


import React, { Component } from 'react';
import './App.css';
import {Container, Col, Row } from 'react-grid-system'
import Forms from './Forms.js'
import {sendScores} from './sendScores.js';
import {editScores} from './editScores.js';
import {saveChanges} from './saveChanges.js';

class SuperSixForm extends Component {
    constructor() {
        super();
        this.state = {
          radioChecked: 'radio1',
          data: [
            {
                "GameID": 1,
                "PlayerHome": "Roger FedererTest",
                "PlayerAway":"Rafael NadalTest",
                "Gender":"M"
            },
            {
                "GameID": 2,
                "PlayerHome": "Novak DjokovicTest",
                "PlayerAway":"Andy MurrayTest",
                "Gender":"M"
            },
            
            {
                "GameID": 3,
                "PlayerHome": "Andre AgassiTest",
                "PlayerAway":"Pete SamprasTest",
                "Gender":"M"
            },
            
            {
                "GameID": 4,
                "PlayerHome": "Serena WilliamsTest",
                "PlayerAway":"Simona HalepTest",
                "Gender":"F"
            },
            
            {
                "GameID": 5,
                "PlayerHome": "Caroline WozniackiTest",
                "PlayerAway":"Angelique KerberTest",
                "Gender":"F"
            },
            
            {
                "GameID": 6,
                "PlayerHome": "Stefi Graff",
                "PlayerAway":"Billie-Jean King",
                "Gender":"F"
            }
            
            ]
        }
      }
      componentDidMount(){
        fetch("/api/getPlayers")
        .then(function(response){ 
            
            if(response.ok){

                return response.json()}
                return Promise.reject("Not logged in");   
            })
        .then(playerData => {
            console.log(playerData)
            
          this.setState({data: playerData})
          console.log(this.state.data)
        }) 
       
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
        <div>
        <Container>
        <Row>
          <Col md={12} lg={6}>
            <Forms value={1} data={this.state.data[0]} checked={this.state.radioChecked} parentEvent={this.handleOptionChange} />
            <Forms value={2} data={this.state.data[1]} checked={this.state.radioChecked} parentEvent={this.handleOptionChange} />
            <Forms value={3} data={this.state.data[2]} checked={this.state.radioChecked} parentEvent={this.handleOptionChange} />
          </Col>
          
          <Col md={12} lg={6}>
            <Forms value={4} data={this.state.data[3]} checked={this.state.radioChecked} parentEvent={this.handleOptionChange} />
            <Forms value={5} data={this.state.data[4]} checked={this.state.radioChecked} parentEvent={this.handleOptionChange} />
            <Forms value={6} data={this.state.data[5]} checked={this.state.radioChecked} parentEvent={this.handleOptionChange} />
          </Col>
        </Row>
      </Container>
    
      <div id="submitDiv">
          <p>
              <button type="submit" id="submit" onClick={this.handleSubmit}>Submit</button>
          </p>
      </div>
      <div id="changesDiv">
          <p>
              <button type="submit" id="saveChanges" onClick={this.handleChanges}>Save Changes</button>
          </p>
      </div>
    
      <div id="editDiv">
          <p>
              <button id="editButton" onClick={this.handleEdit}>Edit</button>
          </p>
      </div>
      </div>

        )}
}

export default SuperSixForm;