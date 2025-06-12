import React, { useState, useEffect } from 'react';
import './RegistrationPage.css';
import { useNavigate } from 'react-router-dom';
import api from '../../logic/api';
import Error from '../Error';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function RegistrationPage() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const navigate = useNavigate();

  function handleSubmit (e) {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    setLoading(true);
    api.post('/register/', {username, email, password})
    .then(() => {
      setError("")
      setUsername("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
       setTimeout(()=> navigate('/authorization'), 500 );
    })
    .catch(err => {
      console.log(err.message)
      setError(err.response?.data?.error || "Ошибка регистрации")
    })
    .finally(() => setLoading(false))

  }

  return (
    <div className='mainBlockReg'>
        <div className='container-reg'>
                <h2 className='reg-h2'>Регистрация</h2>
                <form action="" onSubmit={handleSubmit} className='reg-form'>
                    <label htmlFor="username" className="reg-label">Имя пользователя</label>
                    <input type="text" 
                    value={username} 
                    className="reg-input" 
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='username' min="2" max="25" required />

                    <label htmlFor="email" className="reg-label">E-mail</label>
                    <input type="email" 
                    value={email} 
                    className="reg-input" 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='example@mail.com' required />

                    <label htmlFor="password" className="reg-label">Придумайте ваш пароль</label>
                    <input type="password" 
                    value={password} 
                    className="reg-input" 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='•••••••••••••••' min="3" max="50" required />

                    <label htmlFor="confirmPassword" className="reg-label">Повторите ваш пароль</label>
                    <input type="password" 
                    value={confirmPassword} 
                    className="reg-input" 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder='•••••••••••••••' required />

                    { error && <Error error={error} />}

                <button type='submit' className='reg-btn' disabled={loading}>{loading ? <Spin indicator={<LoadingOutlined spin />} style={{ color: "#C53FFF"}} size="large" /> : "Зарегистрироваться"}</button>
                </form>
                
        </div>

    </div>
  )
}
