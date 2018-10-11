import React, { Component } from 'react';
import './App.css';


class Forms extends Component {
    constructor(props){
        super(props)
        this.state = {
            num1: 0,
            num2: 0,
            gender: this.props.data.Gender,
            maxSets: 5
        }
    }

    componentDidMount(){
        
        //making call to the DB to retrieve our score state, otherwise the original state of 0 will always render
        let self = this
        


        if(this.state.gender==="M"){
            this.setState({maxSets:5})
        } else {
            this.setState({maxSets:3})
        }

        //DB call to get our scores from DB and then set them to our state
        fetch('/api/getPredictions', {
            method: 'get',
        })
        .then(function (response) {
            if (response.ok) {
                return response.json()    
            }
            return Promise.reject("Not logged in");
        })
            .then(function (myData) {
                
                self.setState({
                    num1: myData[0].homeID,
                    num2: myData[0].awayID
                })
        })
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

    handleClick=(e)=>{
        e.preventDefault()
        // console.log("stats"+this.props.value+"Button")
       let stats = document.getElementById("stats"+this.props.value+"Details")

        if(stats.style.display  ==='block'){
            stats.style.display  ='none'
        } else{
            stats.style.display  ='block'
        }
    }

    render() {
       
        return (
            <form className="container" id='allGames'>
                <section className="games" id={"game" + this.props.value}>
                    <div className="gameInfo" id="game1Info">Saturday 8th September 2018, 3:00pm</div>

                    <div className="matchup">
                        <span className="name" id={"team" + (this.props.value * 2 - 1) + "Name"}>{this.props.data.PlayerHome}</span>
                        <input type="number" value = {this.state.num1} onChange={this.onChange1}className="score" id={"score" + (this.props.value * 2 - 1)} min={0} max={this.state.maxSets-this.state.num2}></input>
                        <label className='showPrediction' id={"showPredictionGame"+(this.props.value)+"_1"}></label>
                        <span className='vs'>Vs</span>
                        <input type="number" value = {this.state.num2} onChange={this.onChange2} className="score" id={"score" + this.props.value * 2} min={0} max={this.state.maxSets-this.state.num1}></input>
                        <label className='showPrediction' id={"showPredictionGame"+this.props.value+"_2"}></label>
                        <span className="name" id={"team" + this.props.value * 2 + "Name"}>{this.props.data.PlayerAway}</span>
                        <div>
                            <label className="dblLabel">Double</label>
                            <input type="radio" value={"radio" + this.props.value} name="doublePts" id={"game" + this.props.value + "Dbl"} checked={this.props.checked === ("radio" + this.props.value)} onChange={this.changeRadio}></input>
                        </div>
                    </div>

                    <div className="stats">
                        <button id={"stats"+this.props.value+"Button"} onClick={this.handleClick}>Stats</button>
                        <ul className="statDetails" id={"stats"+this.props.value+"Details"}>
                            <li>{this.props.data.Stats1}</li>
                            <li>{this.props.data.Stats2}</li>
                        </ul>
                    </div>
                </section>
            </form>

        );
    }
}

export default Forms;