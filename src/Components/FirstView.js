import React, { Component } from 'react';
//import '../src/css/App.css';
import Header from '../Components/header'
import '../css/ButtonMesero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

export default class FirstView extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <Header titulo='Burger Queen' />
        </div>

        <div className='btn-Waiter'>
          <Link to="/menu">
            <button>Mesero</button>
          </Link>
        </div>
        <div>
          <button value='Cocina' />
        </div>
      </div>
    )

  }

  /* render() {
 
     return (
       <div>
          <Link to="/menu">
            HOLA
      </Link>
        </div>
        )
      }*/
}

