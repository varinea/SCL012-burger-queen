import React, { Component } from 'react';
import Header from '../Components/header.js';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class FirstView extends Component {
  render() {
    return (
      <div className='backgroundMenu'>
        <div >
          <Header titulo='Burger Queen' />
        </div>

        <div className='Breakfast'>
          <Link to="/menu">
            <Button variant="danger" size="lg" > Mesero </Button>
          </Link>
        </div>
        <div className='lunch'>

          <Button variant="warning" size="lg" block>Cocinero</Button>

        </div>
      </div>
    )

  }
}
export default FirstView;
