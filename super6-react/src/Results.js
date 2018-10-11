import React, { Component } from 'react';
import './App.css';

class Results extends Component {

       list = [
           {
               "GameID": 1,
               "PlayerHome": "Roger Federer",
               "PlayerAway": "Rafael Nadal",
               "Gender": "M",
               "homeScore":1,
               "awayScore":3,
               "result":"Correct"

           },
           {
               "GameID": 2,
               "PlayerHome": "Novak Djokovic",
               "PlayerAway": "Andy Murray",
               "Gender": "M",
               "homeScore":1,
               "awayScore":3,
               "result":"Incorrect"
           },

           {
               "GameID": 3,
               "PlayerHome": "Andre Agassi",
               "PlayerAway": "Pete Sampras",
               "Gender": "M",
               "homeScore":1,
               "awayScore":3,
               "result":"Correct"
           },

           {
               "GameID": 4,
               "PlayerHome": "Serena Williams",
               "PlayerAway": "Simona Halep",
               "Gender": "F",
               "homeScore":1,
               "awayScore":2,
               "result":"Correct"
           },

           {
               "GameID": 5,
               "PlayerHome": "Caroline Wozniacki",
               "PlayerAway": "Angelique Kerber",
               "Gender": "F",
               "homeScore":1,
               "awayScore":2,
               "result":"Correct"
           },

           {
               "GameID": 6,
               "PlayerHome": "Stefi Graff",
               "PlayerAway": "Billie-Jean King",
               "Gender": "F",
               "homeScore":1,
               "awayScore":2,
               "result":"Correct"
           }

       ]




   render() {
       return (<div>

<table>
               <thead>
               <th class= "header">Game</th>
               <th class= "header">Home</th>
               <th class= "header">Away</th>
               <th class= "header">Home Score</th>
               <th class= "header">Away Score</th>
               <th class= "header">Result</th>
               </thead>
               <tbody>
               {this.list.map(member =>
                       <tr>
                       <td>{member.GameID} </td>
                       <td>{member.PlayerHome} </td>
                       <td>{member.PlayerAway}</td>
                       <td>{member.homeScore}</td>
                       <td>{member.awayScore}</td>
                       <td class = {member.result}>{member.result}</td>
                       </tr>
                   )}
               </tbody>

               </table>





       </div>)

   }

}

export default Results