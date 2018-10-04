// A React Router

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Forms from './Forms.js'
import Leaderboard from './Leaderboard.js';
import SuperSixForm from './SuperSixForm.js';
import Feedback from './Feedback.js'


const Main = () => (
    <main>
        <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SuperSixForm}/>
        <Route path='/Leaderboard' component={Leaderboard}/>
        <Route path='/Feedback' component={Feedback}/>
      </Switch>
      </BrowserRouter>
    </main>
  )
  
  export default Main