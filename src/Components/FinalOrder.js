import React from 'react';
import OrderList from './OrderList'

const FinalOrder = ({ orderLists }) => {
    return (
        <div>
            <h1>Lista de pedido</h1>

            <div>
                {orderLists.map(orderList => (
                    <OrderList
                        key={orderList.id}
                        orderList={orderList}
                    />
                ))}
            </div>
        </div>
    )
}

export default FinalOrder;