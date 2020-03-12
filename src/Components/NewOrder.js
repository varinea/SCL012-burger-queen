import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import '../css/Menu.css';

const stateInicial = {
    orderList: {
        cafeAmericano: '',
        cafeLeche: '',
        sandwich: '',
        jugo: '',
    },
    error: false
}

class NewOrder extends Component {
    state = { ...stateInicial }
    handleClick = e => {
        this.setState({
            orderList: {
                ...this.state.orderList, // se hace una copia de lo que habia en los inputs
                [e.target.name]: 1 // se actualiza el valor del input cambiado
            }
        })
    }

    // Cuando el usuario envía el formulario
    handleSubmit = e => {
        e.preventDefault(); // para trabajar con los datos una vez enviados
        // Extraer los valores del state
        const { cafeAmericano, cafeLeche, sandwich, jugo } = this.state.orderList
        // Generar objeto con los datos
        const newOrder = { ...this.state.orderList }
        // newOrder.id = uuid(); // usando libreria de id

        // Agregar la orderList al state de App ------->REVISAAAR
        this.props.createNewOrder(newOrder)
        // Colocar en el state el stateInicial
        this.setState({
            ...stateInicial // para reiniciar el formulario
        })

    }
    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>

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