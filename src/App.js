import React, { Component } from 'react';
import FirstView from './Components/FirstView.js'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import  Menu  from './Components/Menu.js';
import OrdersB from './Components/OrdersB';
import orderD from './Components/orderD.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ='/' component = { FirstView } />
        <Route exact path ='/menu' component = { Menu } />
        <Route exact path ='/ordersB' component = { OrdersB } />
        <Route exact path ='/orderD' component = { orderD } />
      </Switch>
    </Router>
  )
}
export default App