import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import '../css/Menu.css';
import uuid from 'uuid/v4'

const stateInicial = {
    orderList: {
        cliente: '',
        mesa: 1,
        cafeAmericano: 0,
        cafeLeche: 0,
        sandwich: 0,
        jugo: 0,
    },
    error: false
}

class NewOrder extends Component {
    state = { ...stateInicial }
    handleClick = e => {
        this.setState({
            orderList: {
                ...this.state.orderList,
                [e.target.name]: e.target.value + 1
            }
        })

    }
    handleChange = e => {
        this.setState({
            orderList: {
                ...this.state.orderList,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        // Extrayendo los valores del state y creando un objeto
        const { cafeAmericano, cafeLeche, sandwich, jugo } = this.state.orderList
        const newOrder = { ...this.state.orderList }
        newOrder.id = uuid(); // usando libreria de id
        this.props.createNewOrder(newOrder)
        // Reiniciando formulario
        this.setState({
            ...stateInicial
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Cliente"
                            name="cliente"
                            onChange={this.handleChange}
                            value={this.state.orderList.cliente}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Número Mesa"
                            name="mesa"
                            onChange={this.handleChange}
                            value={this.state.orderList.mesa}
                        />
                    </div>

                    <div >
                        <Button variant="warning" size="lg" block name="cafeAmericano" onClick={this.handleClick}
                        > Cafe Americano $500</Button>
                    </div>
                    <div >
                        <Button variant="warning" size="lg" block name="cafeLeche" onClick={this.handleClick}
                        >Cafe con Leche $700</Button>
                    </div>
                    <div >
                        <Button variant="warning" size="lg" block name="sandwich" onClick={this.handleClick}
                        >Sandwich de jamón y queso $1000</Button>
                    </div>
                    <div >
                        <Button variant="warning" size="lg" block name="jugo" onClick={this.handleClick}
                        >Jugo de frutas natural $700</Button>
                    </div>

                    <input type="submit" value="Agregar nuevo pedido" />

                </form>
            </div>
        )

    }
}
export default NewOrder;