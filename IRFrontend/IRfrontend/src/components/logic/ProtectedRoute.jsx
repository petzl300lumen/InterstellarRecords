import { jwtDecode } from 'jwt-decode';
import React, { useState, useEffect } from 'react'
import api from './api';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({children}) {

    const [isAuthorized, setIsAuthorized] = useState(null);
    const location =  useLocation();

    useEffect(function(){
        auth().catch(() => setIsAuthorized(false))
    }, [])

    async function refreshToken() {
        const refreshToken = localStorage.getItem("refresh")
        try {
            const res = await api.post("/token/refresh/", {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                localStorage.setItem("access", res.data.access)
                setIsAuthorized(true)
            } else {
                setIsAuthorized(false)
            }
        }
        catch(error) {
            console.log(error)
            setIsAuthorized(false)
        }
    }

    async function auth() {
        const token = localStorage.getItem("access")
        if(!token){
            setIsAuthorized(false)
            return;
        }
        const decoded = jwtDecode(token)
        const expiry_date = decoded.exp
        const current_time = Date.now() / 1000

        if(current_time > expiry_date){
            await refreshToken();
        }
        else {
            setIsAuthorized(true);
        }
    }

    if(isAuthorized === null){
      return <Spin indicator={<LoadingOutlined style={{ fontSize: 90, color: 'white', margin:"100px 500px" }} spin />} />
    }
    

  return (
    <div>
        {isAuthorized ? children : <Navigate to='/authorization' state={{from: location}} replace />}
    </div>
  )
}
