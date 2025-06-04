import React from 'react';
import './RegistrationPage.css';

export default function RegistrationPage() {
  return (
    <div className='mainBlockReg'>
        <div className='container-reg'>
                <h2 className='reg-h2'>Регистрация</h2>
                <form action="" className='reg-form'>
                    <label htmlFor="" className="reg-label">Имя пользователя</label>
                    <input type="text" className="reg-input" placeholder='username' />
                    <label htmlFor="" className="reg-label">E-mail</label>
                    <input type="email" className="reg-input" placeholder='example@mail.com' />
                    <label htmlFor="" className="reg-label">Придумайте ваш пароль</label>
                    <input type="password" className="reg-input" placeholder='•••••••••••••••' />
                    <label htmlFor="" className="reg-label">Повторите ваш пароль</label>
                    <input type="password" className="reg-input" placeholder='•••••••••••••••' />
                <button type='submit' className='reg-btn'>Зарегистрироваться</button>
                </form>
        </div>

    </div>
  )
}
