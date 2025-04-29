import React from 'react';
import logo from '/logooo.svg';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer-main'>
        <div className='left'>
        <Link to="/"><img className='logo-footer' src={logo} alt="logo" /></Link>
        <p className='copyright'>© Олейникова П. Е. , 2025</p>
        </div>
        <div className='right'>
            <ul className='ul-footer'>
                <li className="li-footer"><Link to="/">Главная</Link></li>
                <li className="li-footer"><Link to="/catalog">Каталог</Link></li>
                <li className="li-footer"><Link to="/contacts">Контакты</Link></li>
            </ul>
        </div>
    </div>
  )
}
