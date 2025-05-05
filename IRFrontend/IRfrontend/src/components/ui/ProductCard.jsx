import React, { useEffect, useState } from 'react';
import api, { BASE_URL } from '../logic/api';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({product, add_item, inCart}) {

  return (
    <div className='productCard'>
      <Link to={`products/${product.slug}`}><img src={`${BASE_URL}${product.image}`} alt="Картинка" className='ProductCardImg' /></Link>
      <p className='titleProductCard'><Link to={`products/${product.slug}`}>{product.title} ({product.category})</Link></p>
      <p className="priceProductCard">{product.price} ₽</p>
      <p className="dateProductCard">{product.date}</p>
      {/* Возможно придется заменить */}
      <button className='buttonCardCart' onClick={
        () => add_item(product.id)
      } disabled={inCart}>{inCart ? "Добавлено в корзину" : "В корзину"}</button>

    </div>
  )
}
