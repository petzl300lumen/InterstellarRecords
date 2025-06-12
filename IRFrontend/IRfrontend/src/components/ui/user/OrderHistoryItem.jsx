import React from 'react';
import './OrderHistoryItem.css';
import im from '/image.png'

export default function OrderHistoryItem() {
  return (
    <div className='OrderHistoryItem'>
            <div className='numoforder-status'><p className='order-history-p ord-hist-num-stat'>Заказ № 21-7435</p> <p className='order-history-p ord-hist-num-stat'><span className='stat'>Статус:</span> Сформирован</p></div>
            
            
            <div className='order-history-products'>
                <div className='ord-hist-cont'>
                <img src={im} alt="productimage" className='order-history-image' />
                <p className="order-history-p ord-hist-title-quant">Depeche Mode Violator (CD-диск)</p>
                </div>
                <p className="order-history-p ord-hist-title-quant">х 2 шт.</p>
            </div>
            
            <div className='sum-date'><p className='order-history-p  ord-hist-date-sum'>Cумма: 5000 ₽</p> <p className='order-history-p ord-hist-date-sum'>Дата: 02.02.02</p></div>
    </div>
  )
}
