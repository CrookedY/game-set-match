import React, { Component } from 'react';
import './App.css';


class Forms extends Component {

    gameData = [
        {
            "GameID": 1,
            "PlayerHome": "Roger Federer",
            "PlayerAway": "Rafael Nadal",
            "Gender": "M"
        },
        {
            "GameID": 2,
            "PlayerHome": "Novak Djokovic",
            "PlayerAway": "Andy Murray",
            "Gender": "M"
        },

        {
            "GameID": 3,
            "PlayerHome": "Andre Agassi",
            "PlayerAway": "Pete Sampras",
            "Gender": "M"
        },

        {
            "GameID": 4,
            "PlayerHome": "Serena Williams",
            "PlayerAway": "Simona Halep",
            "Gender": "F"
        },

        {
            "GameID": 5,
            "PlayerHome": "Caroline Wozniacki",
            "PlayerAway": "Angelique Kerber",
            "Gender": "F"
        },

        {
            "GameID": 6,
            "PlayerHome": "Stefi Graff",
            "PlayerAway": "Billie-Jean King",
            "Gender": "F"
        }

    ]

    changeRadio = (newVal) => {
        this.props.parentEvent(newVal.target.value)
    }
    render() {
        return (


            <form className="container" id='allGames'>
                <section className="games" id={"game" + this.props.value}>
                    <div className="gameInfo" id="game1Info">Saturday 8th September 2018, 3:00pm</div>

                    <div className="matchup">
                        <span className="name" id={"team" + (this.props.value * 2 - 1) + "Name"}>Team {this.props.value * 2 - 1}</span>
                        <input type="number" className="score" id={"score" + (this.props.value * 2 - 1)} min={0} max={5}></input>
                        <label className='showPrediction' id={"showPredictionGame"+(this.props.value)+"_1"}></label>
                        <span className='vs'>Vs</span>
                        <input type="number" className="score" id={"score" + this.props.value * 2} min={0} max={5}></input>
                        <label className='showPrediction' id={"showPredictionGame"+this.props.value+"_2"}></label>
                        <span className="name" id={"team" + this.props.value * 2 + "Name"}>Team {this.props.value * 2}</span>
                        <div>
                            <label className="dblLabel">Double</label>
                            <input type="radio" value={"radio" + this.props.value} name="doublePts" id={"game" + this.props.value + "Dbl"} checked={this.props.checked === ("radio" + this.props.value)} onChange={this.changeRadio}></input>
                        </div>
                    </div>

                    <div className="stats">
                        <button id="stats1Button">Stats</button>
                        <ul className="statDetails" id="stats1Details">
                            <li>Stat1</li>
                            <li>Stat2</li>
                            <li>Stat3</li>
                        </ul>
                    </div>
                </section>
            </form>

        );
    }
}

export default Forms;