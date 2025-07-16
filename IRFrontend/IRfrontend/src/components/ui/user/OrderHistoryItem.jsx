import React from 'react';
import './OrderHistoryItem.css';
import im from '/image.png'
import { BASE_URL } from '../../logic/api';

export default function OrderHistoryItem({order}) {


  return (
    <div className='OrderHistoryItem'>
            <div className='numoforder-status'><p className='order-history-p ord-hist-num-stat'>Заказ № </p> <p className='order-history-p ord-hist-num-stat'><span className='stat'>Статус:</span> {}</p></div>
            
  
            <div className='sum-date'><p className='order-history-p  ord-hist-date-sum'>Cумма: {} ₽</p> <p className='order-history-p ord-hist-date-sum'>Дата: {}</p></div>
    </div>
  )


  /* Баганные заказы
  return (
    <div className='OrderHistoryItem'>
            <div className='numoforder-status'><p className='order-history-p ord-hist-num-stat'>Заказ № {order.order_code}</p> <p className='order-history-p ord-hist-num-stat'><span className='stat'>Статус:</span> {order.status}</p></div>
            
            {order.items.map(item => (
            <div className='order-history-products' key={item.id}>
                <div className='ord-hist-cont'>
                <img src={`${BASE_URL}${item.product.image}`} alt="productimage" className='order-history-image' />
                <p className="order-history-p ord-hist-title-quant">{item.product.title} (CD)</p>
                </div>
                <p className="order-history-p ord-hist-title-quant">х {item.quantity} шт.</p>
            </div>
            ))}
            <div className='sum-date'><p className='order-history-p  ord-hist-date-sum'>Cумма: {order.amount} ₽</p> <p className='order-history-p ord-hist-date-sum'>Дата: {order.date}</p></div>
    </div>
  )
    */
}
