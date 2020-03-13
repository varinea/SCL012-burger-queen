import React, { Component } from 'react';
import Header from '../Components/header.js';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Firstv.css'



class FirstView extends Component {
  render() {
    return (
      <div className='backgroundMenu'>
        <div >
          <Header  titulo='Selecciona tu cargo' />
        </div>

        <div className='Breakfast'>
          <Link to="/menu">
            <Button variant="danger" className="bntMesero"> Mesero </Button>
          </Link>

        </div>

      </div>
    )

  }
}
export default FirstView;
