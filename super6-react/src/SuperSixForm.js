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
        <div>
        <Container>
        <Row>
          <Col md={12} lg={6}>
            <Forms value={1} checked={this.state.radioChecked} parentEvent={this.handleOptionChange} />
            <Forms value={2} checked={this.state.radioChecked} parentEvent={this.handleOptionChange} />
            <Forms value={3} checked={this.state.radioChecked} parentEvent={this.handleOptionChange} />
          </Col>
          
          <Col md={12} lg={6}>
            <Forms value={4} checked={this.state.radioChecked} parentEvent={this.handleOptionChange} />
            <Forms value={5} checked={this.state.radioChecked} parentEvent={this.handleOptionChange} />
            <Forms value={6} checked={this.state.radioChecked} parentEvent={this.handleOptionChange} />
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