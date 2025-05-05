
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '/logooo.svg';
import cart from '/Cart.svg';
import user from '/User.svg';

import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

export default function Header({numCartItems}) {


  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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
          
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>     
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
            <h2>fvjofwapo</h2>
          
          <div className="subtotal">
            
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
