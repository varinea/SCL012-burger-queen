import React, { Component } from 'react';
//import '../src/css/App.css';
//import Header from './Components/header'
//import './css/ButtonMesero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from './Components/Button';
import {Link} from 'react-router-dom'

export default class FirstView extends Component {
  /**
   * @name handleClick
   * @param {Event} event - lol
   * @description previene el comportamiento por defecto
   * y hace un alert
   */
 /* handleClick = (event) => {
    event.preventDefault();
    //  console.dir(event);
    alert("funciona");
  };
  
  render() {
     
    return (
      <div className="App">
        <div className="App-header">
          <Header titulo='Burger Queen' />
        </div>

        <div className='btn-Waiter'>
         <Button 
            value='Mesero'
            onClick={this.handleClick}/>
          <Button value='Camarero'/>
        </div> 
      </div>
    )

  }
  */
 render() {
     
 return(
 <div className='App'>  
     <Link to="/menu">
     HOLA
     </Link>
     </div>
 )
 }
}

