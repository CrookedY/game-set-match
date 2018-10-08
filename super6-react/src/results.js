import React, { Component } from 'react';
import './App.css';

class results extends Component {

    constructor(props) {
        super(props)
        this.state = {
            resultData: []
        }
    }

    componentDidMount() {
        let self = this;

        let fetches = [
            fetch('/api/getPredictions', {
                method: 'GET'
            }),
            fetch('/api/getPlayers',{
                method: 'GET'
            })
          ]

        Promise.all(fetches)
        .then(data=>{
            let predictions = data[0].filter(P => P.user === user1);
            let Players = data[1];
            var gameResults = []
        

            predictions.forEach(element => {
                var user = element["user"];
                userData = []
                totalPoints = 0
                if (element["game1H"]==gameResults.game1H && element["game1A"]==gameResults.game1A){
                    userData["game1"]=True
                }
                if (element["game2H"]==gameResults.game2H && element["game2A"]==gameResults.game2A){
                    userData["game2"]=True
                    }
                if (element["game3H"]==gameResults.game3H && element["game3A"]==gameResults.game3A){
                    userData["game3"]=True
                    }
                if (element["game4H"]==gameResults.game4H && element["game4A"]==gameResults.game4A){
                    userData["game4"]=True
                    }
                if (element["game5H"]==gameResults.game5H && element["game5A"]==gameResults.game5A){
                    userData["game5"]=True
                    }
                if (element["game6H"]==gameResults.game6H && element["game6A"]==gameResults.game6A){
                    userData["game6"]=True
                    }
                    self.setState({winlose: userData})
             });
        })
    
    }


    render() {
       
        return (
<div class = "tableLB">
            <table>
                <thead>
                <th class= "header">Game 1</th>
                <th class= "header">Game 2</th>
                <th class= "header">Game 3</th>                <th class= "header">Game 1</th>
                <th class= "header">Game 4</th>
                <th class= "header">Game 5</th>
                <th class= "header">Game 6</th>
                </thead>
                <tbody>
                {this.state.winlose.map(member =>
                        <tr>
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