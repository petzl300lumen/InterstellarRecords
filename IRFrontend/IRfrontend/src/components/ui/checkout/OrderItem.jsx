import React from 'react';
import im from "/image.png";
import './OrderItem.css';

export default function OrderItem() {
  return (
    <div className='order-item'>

        <img className='order-image' src={im} alt="img" />
        <p className="orderitem-title">Depeche mode Violator (CD-диск)</p>
        <p className='quantity'>1 шт</p>
        <p className='order-price'>700 р</p>

    </div>
  )
}
