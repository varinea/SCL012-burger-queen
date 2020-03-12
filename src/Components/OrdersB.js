import React, { Component } from 'react';
import NewOrder from '../Components/NewOrder'
import Header from '../Components/header.js'


class Breakfast extends Component {
    state = {
        orderList: []
    }
    createNewOrder = data => { // Pasando datos desde nuevacita.js
        console.log(data);
        // Copiar state actual
        const orderList = [...this.state.orderList, data]; // esto es como un push
        // Agregar el nuevo state 
        this.setState({
            orderList // se le puede poner orderList : orderList pero se omite por tener el mismo nombre
        })
    }
    render() {
        return (
            <div className='backgroundMenu'>

                <Header titulo='Desayunos' />

                <div>
                    <NewOrder createNewOrder={this.createNewOrder} />
                </div>

            </div>

        );
    }
}


export default Breakfast;