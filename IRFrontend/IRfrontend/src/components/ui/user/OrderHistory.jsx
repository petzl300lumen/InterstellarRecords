import React from 'react';
import './OrderHistory.css';
import OrderHistotyItemContainer from './OrderHistotyItemContainer';

export default function OrderHistory() {
  return (
    <div className='orderhistory'>
        <div className="order-head"><h2 className='order-head-h2'>История заказов</h2></div>
        <div className="order-history-main">
            
            <OrderHistotyItemContainer />

        </div>
    </div>
  )
}
