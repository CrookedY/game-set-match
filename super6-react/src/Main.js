import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Forms from './Forms.js'
import Leaderboard from './Leaderboard.js';
import SuperSixForm from './SuperSixForm.js'


const Main = () => (
    <main>
        <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SuperSixForm}/>
        <Route path='/Leaderboard' component={Leaderboard}/>
      </Switch>
      </BrowserRouter>
    </main>
  )
  
  export default Main