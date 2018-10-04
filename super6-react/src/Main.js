import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Forms from './Forms.js'
import Leaderboard from './Leaderboard.js';
import SuperSixForm from './SuperSixForm.js';
import Results2 from './Results2.js';


const Main = () => (
    <main>
        <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SuperSixForm}/>
        <Route path='/Leaderboard' component={Leaderboard}/>
        <Route path='/Results2' component={Results2}/>
      </Switch>
      </BrowserRouter>
    </main>
  )
  
  export default Main