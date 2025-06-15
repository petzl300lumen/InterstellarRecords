import React from 'react';
import gith from '/gith.svg';
import tg from '/telega.svg';
import disc from '/disc.svg';
import vk from '/vk.svg';

export default function Contacts() {
  return (
    <div style={{margin: "50px 100px"}}> 
        <h1 style={{fontFamily:"Unbounded-Light", color:'white' }}>Контакты</h1>
        <p style={{fontFamily:"Unbounded-Light"}}>Свяжитесь с нами, и мы поможем ответить на любые ваши вопросы.</p>
        <div style={{display: "flex", marginBottom:10}}><img src={tg} alt="teleg"  style={{width: 40, height: 40}}/><a style={{color:"white",fontFamily:"Unbounded-Light",  marginTop:7, marginLeft:10}} href="">@p3tzl300lum3n</a></div>
        <div style={{display: "flex", marginBottom:10}}><img src={gith} alt="teleg"  style={{width: 40, height: 40}}/><a style={{color:"white",fontFamily:"Unbounded-Light",  marginTop:7, marginLeft:10}} href="">petzl300lumen</a></div>
       

    </div>
  )
}
