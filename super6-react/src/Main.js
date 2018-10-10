// A React Router

import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Forms from './Forms.js'
import Login from './Login.js';
import Leaderboard from './Leaderboard.js';
import SuperSixForm from './SuperSixForm.js';
import Feedback from './Feedback.js'


class Main extends Component {
    constructor(props){
      super(props)
    
    }
    

  render(){
    //sets the path dependent on your logged in status. 
    //If we're logged in we want to send to logout and vice versa
    let logPath = ''
    if(this.props.isLoggedIn=='true'){
      logPath='/Logout'
    } else {
      logPath='Login'
    }
  return(<main>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SuperSixForm}/>
        <Route path={this.logPath} render={(props)=><Login {...props} handleLoginClick={this.props.handleLoginClick} isLoggedIn={this.props.isLoggedIn}/>}/>
        <Route path='/Leaderboard' component={Leaderboard}/>
        <Route path='/Feedback' component={Feedback}/>
      </Switch>
      </BrowserRouter>
    </main>
  )
  }
}
  export default Main
