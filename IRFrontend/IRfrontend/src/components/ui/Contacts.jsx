import React from 'react';
import gith from '/github.svg';
import tg from '/telegram.svg';
import whatsapp from '/whatsapp.svg';
import vk from '/VK.svg';
import './Contacts.css';

export default function Contacts() {
  return (
    <div className='backrndDivContacts' /* style={{ backgroundImage: `url(${BACK})` }} */ >
        <div className="contacts-text">
          <h1 className='cont-h1'>Контакты</h1>
          <p className='cont-p'>Свяжитесь с нами, и мы поможем ответить на любые ваши вопросы.</p>
        </div> 
        <div className="social-cards">


        <div className='social-card'> 
          <div style={{marginRight:15}}><img src={whatsapp} alt="whatsapp" style={{width: 45, height: 45}}/></div>
          <div style={{marginRight:"auto"}}><p style={{color: "#3E01FF", fontFamily: "RubikMonoOne", fontSize: 17, margin:0}}>WhatsApp</p>
          <a href="https://wa.me/79954110311" target="_blank" rel="noopener noreferrer" style={{color:"#3E01FF", fontSize:14}}>+7(995)411-01-11</a></div>
          <div><svg style={{marginTop:10}} width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L9 9.5L1 18" stroke="#3E01FF" stroke-width="2" stroke-linecap="round"/>
          </svg>
          </div></div>

          <div className='social-card'> 
          <div style={{marginRight:15}}><img src={vk} alt="vk" style={{width: 45, height: 45}}/></div>
          <div style={{marginRight:"auto"}}><p style={{color: "#3E01FF", fontFamily: "RubikMonoOne", fontSize: 17, margin:0}}>VK</p>
          <a href="https://vk.com/na_mida" target="_blank" rel="noopener noreferrer" style={{color:"#3E01FF", fontSize:14}}>@na_mida</a></div>
          <div><svg style={{marginTop:10}} width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L9 9.5L1 18" stroke="#3E01FF" stroke-width="2" stroke-linecap="round"/>
          </svg>
          </div></div>


          <div className='social-card'> 
          <div style={{marginRight:15}}><img src={tg} alt="tg" style={{width: 45, height: 45}}/></div>
          <div style={{marginRight:"auto"}}><p style={{color: "#3E01FF", fontFamily: "RubikMonoOne", fontSize: 17, margin:0}}>Telegram</p>
          <a href="https://web.telegram.org/a/#5219210333" target="_blank" rel="noopener noreferrer" style={{color:"#3E01FF", fontSize:14}}>@p3tzl300lum3n</a></div>
          <div><svg style={{marginTop:10}} width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L9 9.5L1 18" stroke="#3E01FF" stroke-width="2" stroke-linecap="round"/>
          </svg>
          </div></div>


        <div className='social-card'> 
          <div style={{marginRight:15}}><img src={gith} alt="github" style={{width: 45, height: 45}}/></div>
          <div style={{marginRight:"auto"}}><p style={{color: "#3E01FF", fontFamily: "RubikMonoOne", fontSize: 17, margin:0}}>GitHub</p>
          <a href="https://github.com/petzl300lumen" target="_blank" rel="noopener noreferrer" style={{color:"#3E01FF", fontSize:14}}>petzl300lumen</a></div>
          <div><svg style={{marginTop:10}} width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L9 9.5L1 18" stroke="#3E01FF" stroke-width="2" stroke-linecap="round"/>
          </svg>
          </div></div>


        </div>
       

    </div>
  )
}
