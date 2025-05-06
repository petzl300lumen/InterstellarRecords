
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '/logooo.svg';
import cart from '/Cart.svg';
import user from '/User.svg';

import React, { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import CartItem from './cart/CartItem';
import api from '../logic/api';

export default function Header({numCartItems}) {


  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const cart_code = localStorage.getItem("cart_code"); 
  const [cartitems, setCartItems] =useState([]);
  useEffect(function(){
    api.get(`get_cart?cart_code=${cart_code}`)
    .then(res =>{
      console.log(res.data)
      setCartItems(res.data.items)
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [])

  return (
<div className=''>
    
    <div className="header">
    <Link to="/"><img src={logo} alt="logo" className='logo' /> </Link>
    <nav className='header-nav'>
        <ul className='header-ul'>
            <li className='header-li'><Link to="/">Главная</Link></li>
            <li className='header-li'><Link to="/catalog">Каталог</Link></li>
            <li className='header-li'><Link to="/contacts">Контакты</Link></li>
        </ul>
        <ul className='header-ul2'>
          <li className="liauth"><Link to="/authorization">Войти</Link></li>
          <li className="liauth"><Link to="/registration">Регистрация</Link></li>
          <li className="header-li2">
          <button onClick={showDrawer} style={{ all: 'unset', cursor: 'pointer' }}>
            <img src={cart} alt="cart" /> 
          {numCartItems == 0 || <div className='span-header'><p>{numCartItems}</p></div>}
          </button>
          <Drawer title="Коризина" onClose={onClose} open={open} size={'large'} style={{fontFamily: 'Unbounded-Light'}}>
          {cartitems.map(item =>  <CartItem key={item.id} item={item} />)}
        {/* <CartItem /> */}
          
          
          <div className="subtotal">
            <div className="subtotal-p"><p className='subtotal-p-sum'>Товаров на сумму:</p><p className='subtotal-p-price'>200 ₽</p></div>
            <div className="subtotal-p"><p className='subtotal-p-delivery'>Доставка:</p><p className='subtotal-p-price'>200 ₽</p></div>
            <div className="subtotal-p"><p className='subtotal-p-total'>Итого:</p><p className='subtotal-p-price subtotal-p-price-total'>200 ₽</p></div>
            <button className='btn-cart-pay'>Перейти к оплате</button>
          </div>
        </Drawer>
          </li>
          
          {/* Иконка пользователя рендеристся условно, смотреть тутор */}
          <li className="header-li2"><Link to="/profile"><img src={user} alt="user" /></Link></li>
        </ul>
        
        
      </nav>
    <div className="header-background"></div>


    </div>

</div>
  )
}
