import React, { Component } from 'react';
import NewOrder from '../Components/NewOrder'
import Header from '../Components/header.js'
import FinalOrder from '../Components/FinalOrder.js'



class Breakfast extends Component {
    state = {
        orderLists: []
    }
    createNewOrder = data => { // Pasando datos desde newOrder.js
        console.log(data);
        // Copiar state actual
        const orderLists = [...this.state.orderLists, data]; // esto es como un push
        // Agregar el nuevo state 
        this.setState({
            orderLists // se le puede poner orderLists : orderLists pero se omite por tener el mismo nombre

        })
    }
    render() {
        return (
            <div className='backgroundMenu'>

                <Header titulo='Desayunos' />

                <div>
                    <NewOrder createNewOrder={this.createNewOrder} />
                </div>
                <div>
                    <FinalOrder
                        orderLists={this.state.orderLists} />
                </div>
            </div>

        );
    }
}


export default Breakfast;