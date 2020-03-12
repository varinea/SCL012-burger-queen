import React from 'react';
import FirstView from './Components/FirstView.js';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import  Menu  from './Components/Menu.js';
import OrdersB from './Components/OrdersB.js';
import OrdersD from './Components/OrderD.js';
import Client from './Components/Client.js';

function App (){
  return(
    <Router>
      <Switch>
        <Route exact path ='/' component = {FirstView} />
        <Route exact path ='/menu' component = {Menu} />
        <Route exact path ='/OrdersB' component = {OrdersB} />
        <Route exact path  ='/OrdersD' component = {OrdersD} />
        <Route exact path  ='/Client' component = {Client} />
      </Switch>
    </Router>
  )
}
export default App;