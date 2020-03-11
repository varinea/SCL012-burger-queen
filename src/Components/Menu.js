import React, { Component } from 'react';
import Header from '../Components/header'
import Button from '../Components/Button';
import { Link } from 'react-router-dom'
import NewOrder from '../Components/Orders';



export default class Menu extends Component {


    render() {

        return (
            <div className="App">
                <div className="App-header">
                    <Header titulo='Burger Queen' />
                </div>

                <div className='btn-Waiter'>
                    <Link to="/order">
                        <Button
                            value='desayuno' />
                    </Link>
                </div>
                <div>
                    <Button value='cena' />
                </div>
                <NewOrder
                    createNewOrder={this.createNewOrder}
                />
            </div>
        )


    }
}