import React from 'react';
import imgaaa from '/image.png';
import deleteBtn from '/Deletebtn.svg';
import './CartItem.css';
import { BASE_URL } from '../../logic/api';

export default function CartItem({item}) {
  return (
    
    <div className='cartItem'>
        <img src={`${BASE_URL}${item.product.image}`} alt="" className='imageInCart' />
        <div className="textinfocart">
            <p className='p-infocart p-infocart-title'>{item.product.title}</p>
            <p className='p-infocart p-infocart-price'>{item.product.price}  ₽</p>
        </div>
        <button className='deletebtn'><img src={deleteBtn} alt="delete"  /></button>
    </div>
  )
}
