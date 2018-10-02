import React, { Component } from 'react';
import './App.css';


class Forms extends Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0
        }
    }

    onChange1=(e)=>{
        this.setState({num1: e.target.value})
    }

    onChange2=(e)=>{
        this.setState({num2: e.target.value})
    }

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
                        <input type="number" value = {this.state.num1} onChange={this.onChange1}className="score" id={"score" + (this.props.value * 2 - 1)} min={0} max={3-this.state.num2}></input>
                        <label className='showPrediction' id={"showPredictionGame"+(this.props.value)+"_1"}></label>
                        <span className='vs'>Vs</span>
                        <input type="number" value = {this.state.num2} onChange={this.onChange2} className="score" id={"score" + this.props.value * 2} min={0} max={3-this.state.num1}></input>
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