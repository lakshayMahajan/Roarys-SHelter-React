import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import SIgnUp from './views/s-ign-up'
import SignIn from './views/sign-in'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={SIgnUp} path="/s-ign-up" />
        <Route exact component={SignIn} path="/sign-in" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
