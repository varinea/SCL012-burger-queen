import React, { Component } from 'react';
import '../src/css/App.css';
import Button from './Components/Button'
import Header from './Components/header'
import './css/ButtonMesero.css';
export default class app extends Component{
   handleClick= (event) => {
    event.preventDefault();
    alert('Button Clicked');
   };
   
  render(){

    return (
      <div className="App">  
      
        <div className="App-header">
        <Header titulo='Burger Queen'/>

        <Button
            className="App-boton"
            onClick={this.handleClick} 
            value='wenaaaa' >
          </Button>
       </div>
    </div>
    )
   
  }
}

   
