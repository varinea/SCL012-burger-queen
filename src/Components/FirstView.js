import React, { Component } from 'react';
import Header from '../Components/header';
import { Button } from 'react-bootstrap'
import '../css/Menu.css';
import { Link } from 'react-router-dom'


class FirstView extends Component {
  render() {
    return (
      <div className='backgroundMenu'>
        <div >
          <Header titulo='Burger Queen' />
        </div>

        <div className='btn-lunch'>
          <Link to="/menu">
            <Button variant="warning" size="lg" block>Mesera/o </Button>
          </Link>
        </div>
        <div className='btn-lunch'>
        </div>
      </div>
    )

  }
}
export default FirstView;
