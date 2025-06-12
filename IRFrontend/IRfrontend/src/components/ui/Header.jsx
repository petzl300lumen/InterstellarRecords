
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '/logooo.svg';
import cart from '/Cart.svg';
import user from '/User.svg';

import React, { useContext, useEffect, useState } from 'react';
import { Drawer } from 'antd';
import CartItem from './cart/CartItem';
import api from '../logic/api';
import useCartData from '../../hooks/useCartData';
import { AuthContext } from '../context/AuthContext';

export default function Header({numCartItems, setNumberCartItems}) {

  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated} = useContext( AuthContext )

  function logout(){
    localStorage.removeItem("access")
    setIsAuthenticated(false)
}

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const {cartitems, setCartItems, cartTotal, setCartTotal, total, delivery} = useCartData();

  // function updateCartState(){
  //   useEffect(function(){
  //     api.get(`get_cart?cart_code=${cart_code}`)
  //     .then(res =>{
  //       setCartItems(res.data.items)
  //       setCartTotal(res.data.sum_total)
  //     })
  //     .catch(err => {
  //       console.log(err.message)
  //     })
  //   }, [])
  // }
  
  // if(cartitems.length< 1){
  //   return (<span>Корзина пуста.</span>)
  // }

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
          

          {isAuthenticated ? (<> 
          <li className="header-li2"><Link to="/profile"><img src={user} alt="user" /></Link></li>
          <li className="header-li-exit" onClick={logout}><Link to="/">Выйти</Link></li> </>)
            :
            (<>
              <li className="liauth"><Link to="/authorization">Войти</Link></li>
              <li className="liauth"><Link to="/registration">Регистрация</Link></li>
            </>)
        }

<li className="header-li2 cart-li">
          <button onClick={showDrawer} style={{ all: 'unset', cursor: 'pointer' }}>
            <img src={cart} alt="cart" /> 
          {numCartItems == 0 || <div className='span-header'><p>{numCartItems}</p></div>}
          </button>
          <Drawer
           title="Коризина" 
           onClose={onClose} 
           open={open} 
           size={'large'} 
           style={{fontFamily: 'Unbounded-Light'}}
           >
          {cartitems.length > 0 ? (<div className='cart-items-container'>{cartitems.map(item => 
             <CartItem 
             key={item.id} 
             item={item} 
             setCartItems={setCartItems} 
             cartitems={cartitems} 
             setCartTotal={setCartTotal}
             cartTotal = {cartTotal} 
             setNumberCartItems = {setNumberCartItems}
             />
             )}</div>) : (<p className='emptycart-p'>Корзина пуста.</p>)}
          
          <div className="subtotal">
            <div className="subtotal-p"><p className='subtotal-p-sum'>Товаров на сумму:</p><p className='subtotal-p-price'>{cartTotal} ₽</p></div>
            <div className="subtotal-p"><p className='subtotal-p-delivery'>Доставка:</p><p className='subtotal-p-price'>{delivery} ₽</p></div>
            <div className="subtotal-p"><p className='subtotal-p-total'>Итого:</p><p className='subtotal-p-price subtotal-p-price-total'>{total} ₽</p></div>
            <button onClick={() => {
              if (cartitems.length === 0){
                alert("Ваша корзина пуста. Для начала добавьте товар для оформления заказа")
              }
              else{
                onClose();
                navigate('/checkout');
              }
              onClose(); 
              }} className='btn-cart-pay'>Перейти к оплате</button>
          </div>
        </Drawer>
          </li>  
          
        </ul>
        
        
      </nav>
    <div className="header-background"></div>


    </div>

</div>
  )
}
