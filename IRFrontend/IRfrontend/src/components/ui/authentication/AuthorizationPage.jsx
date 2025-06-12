import React, { use, useContext, useState } from 'react';
import './AuthorizationPage.css'
import api from '../../logic/api';
import Error from '../Error';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function AuthorizationPage() {

    const {setIsAuthenticated} = useContext(AuthContext)
    

    const location = useLocation();
    const navigate = useNavigate();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const userInfo = {username, password}

    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)

        api.post("token/", userInfo)
        .then(res => {
            console.log(res.data)
            localStorage.setItem("access", res.data.access)
            localStorage.setItem("refresh", res.data.refresh)
            setUserName("")
            setPassword("")
            setError("")
            setIsAuthenticated(true)
            setLoading(false)

            const from = location?.state?.from.pathname || "/"
            navigate(from, {replace:true})
        })
        .catch(err => {
            console.log(err.message)
            setError(err.message)
            // setLoading(false)
        })
        .finally(() => setLoading(false))
    }

  return (
    <div>
        <div className='container-auth'>
                <h2 className='auth-h2'>Вход в аккаунт</h2>
                <form onSubmit={handleSubmit} action="" className='auth-form'>
                    <label htmlFor="username" className="auth-label">Имя пользователя</label>
                    <input type="username" 
                    value={username} 
                    onChange={(e) => setUserName(e.target.value)} 
                    className="auth-input" placeholder='username' id='email' required />
                    <label htmlFor="password" className="auth-label">Пароль</label>
                    <input type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="auth-input" placeholder='•••••••••••••••' id='password' required />
                    { error && <Error error={error} />}
                    
                <button type='submit' className='auth-btn' disabled={loading}>{loading ? <Spin indicator={<LoadingOutlined spin />} style={{ color: "#B4FED9"}} size="large" /> : "Войти"}</button>
                </form>
        </div>

    </div>
  )
}
