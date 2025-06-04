import React from 'react';
import im from "/image.png";
import './OrderItem.css';
import { BASE_URL } from '../../logic/api';

export default function OrderItem({cartitem}) {
  return (
    <div className='order-item'>

        <img className='order-image' src={`${BASE_URL}${cartitem.product.image}`} alt="img" />
        <p className="orderitem-title">{cartitem.product.title} ({cartitem.product.category})</p>
        <p className='quantity'>{cartitem.quantity} шт</p>
        <p className='order-price'>{cartitem.product.price} ₽</p>

    </div>
  )
}
