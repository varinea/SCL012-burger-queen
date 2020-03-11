import React, { Component } from 'react';
import FirstView from './Components/FirstView.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './Components/Menu.js';
import Orders from './Components/Orders.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={FirstView} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/orders' component={Orders} />
      </Switch>
    </Router>
  )
}
export default App