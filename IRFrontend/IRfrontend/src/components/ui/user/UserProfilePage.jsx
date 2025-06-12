import React from 'react';
import UserInfo from './UserInfo';
import './UserProfilePage.css';
import OrderHistory from './OrderHistory';

export default function UserProfilePage() {
  return (
    <div className='userprofilepage'>
            <div className="profile-left">
                <UserInfo />
            </div>
            <div className="profile-right">
                <OrderHistory />
            </div>
    </div>
  )
}
