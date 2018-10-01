import React, { Component } from 'react';
import './App.css';

class Leaderboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            myData: []
        }
    }

    componentDidMount() {
        let self = this;
        fetch('/Leaderboard', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            //console.log(response)
            return response.json();
        }).then(function(data) {
            self.setState({myData: data});
            console.log(data)
        }).catch(err => {
        console.log('caught it!',err);
        })
    }


    render() {
       
        return (
<div class = "tableLB">
            <table>
                <thead>
                <th class= "header">Position</th>
                <th class= "header">Name</th>
                <th class= "header">Points</th>
                </thead>
                <tbody>
                {this.state.myData.map(member =>
                        <tr key={member.user}>
                        <td>{member.rank} </td>
                        <td>{member.name}</td>
                        <td>{member.score}</td>
                        </tr>
                    )}
                </tbody>
                   
                </table>

            </div>
        );
    }
}

export default Leaderboard;