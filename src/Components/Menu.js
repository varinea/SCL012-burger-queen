import React,{ Component } from 'react';
import Header from '../Components/header';
import {Button} from 'react-bootstrap'
import '../css/Menu.css';
import {Link} from 'react-router-dom'

class Menu extends Component {
    render() {
      return (
        <div className='backgroundMenu'>
          <div >
            <Header titulo='Menu' />
          </div>
          
          <div className='btnBreakfast'>
            <Link to="/orderB">
              <Button variant="warning" size="lg" block> Desayuno </Button>
            </Link>
            </div> 
            <div className='btn-lunch'>
              <Link to="/orderD">
                <Button variant="warning" size="lg" block>Almuerzo o Cena</Button>
              </Link>
            </div>
        </div>
      )
  
    }
}
export default Menu;