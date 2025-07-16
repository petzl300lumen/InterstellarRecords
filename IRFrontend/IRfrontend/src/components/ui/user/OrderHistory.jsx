import React, { useEffect, useState } from 'react';
import './OrderHistory.css';
import OrderHistoryItem from './OrderHistoryItem';
import api from '../../logic/api';


export default function OrderHistory() {

  // баги

  // const [orders, setOrders] = useState([]);

  //   useEffect(() => {
  //       api.get('/order_history/')
  //           .then(res => setOrders(res.data))
  //           .catch(() => setOrders([]));
  //   }, []);



  
  return (
    <div className='orderhistory'>
        <div className="order-head"><h2 className='order-head-h2'>История заказов</h2></div>
        <div className="order-history-main">
             Нет заказов
            {/* баги */}
          {/* {orders.length === 0 && <div>Нет заказов</div>}
                {orders.map(order => (
                    <OrderHistoryItem key={order.id} order={order} />
                ))} */}

        </div>
    </div>
  )
}
