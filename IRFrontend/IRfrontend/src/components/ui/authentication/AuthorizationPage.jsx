import React from 'react';
import './AuthorizationPage.css'

export default function AuthorizationPage() {
  return (
    <div>
        
        <div className='container-auth'>
                <h2 className='auth-h2'>Вход в аккаунт</h2>
                <form action="" className='auth-form'>
                    <label htmlFor="" className="auth-label">Имя пользователя</label>
                    <input type="text" className="auth-input" placeholder='username' />
                    <label htmlFor="" className="auth-label">Пароль</label>
                    <input type="password" className="auth-input" placeholder='•••••••••••••••' />
                <button type='submit' className='auth-btn'>Войти</button>
                </form>
        </div>

    </div>
  )
}
