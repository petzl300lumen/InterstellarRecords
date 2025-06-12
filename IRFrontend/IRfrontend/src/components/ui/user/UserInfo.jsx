import React, { useContext, useEffect, useState } from 'react';
import './UserInfo.css';
import ava from '/ava.svg';
import mail from '/mail.svg';
import quit from '/quit.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import api from '../../logic/api';

export default function UserInfo() {
      const { isAuthenticated, setIsAuthenticated} = useContext( AuthContext )
    
      const [userInfo, setUserInfo] = useState({})

      function logout(){
        localStorage.removeItem("access")
        setIsAuthenticated(false)
    }

      useEffect(function(){
          api.get("user_info")
          .then(res => {
            console.log(res.data)
            setUserInfo(res.data)
          })
          .catch( err => {
            console.log(err.message)
          }

          )
        }, [])

    
  return (
    <div className='userinfo'>
        <div><img src={ava} alt="ava" className='profile-pic' /></div>
        <p className='profile-login'>{userInfo.username}</p>
        <div className='profile-mail-mail'>
            <img src={mail} alt="mail" />
            <p className='profile-p'>{userInfo.email}</p>
        </div>
        <div className='profile-line'></div>
        <div className='profile-quit'>
            <img src={quit} alt="quit" />
            <p className='profile-p' onClick={logout}><Link to="/">Выйти из аккаунт</Link></p>
        </div>
    </div>
  )
}
