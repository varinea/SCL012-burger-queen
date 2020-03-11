import React,{Component } from 'react';
import Header from '../Components/header.js'
import {Button} from 'react-bootstrap'
import '../css/Menu.css';

class Breakfast extends Component {
    render() {
      return (
        <div className='backgroundMenu'>
          <div >
            <Header titulo='Desayunos' />
          </div>
          
          <div >
            
            <Button variant="warning" size="lg" block> Cafe Americano $500</Button>
            
            </div> 
            <div >
             <Button variant="warning" size="lg" block>Cafe con Leche $700</Button>
            </div>
            <div >
             <Button variant="warning" size="lg" block>Sandwich de jamón y queso $1000</Button>
            </div>
            <div >
             <Button variant="warning" size="lg" block>Jugo de frutas natural $700</Button>
            </div>
        </div>
      )
      
    }
}
export default Breakfast;