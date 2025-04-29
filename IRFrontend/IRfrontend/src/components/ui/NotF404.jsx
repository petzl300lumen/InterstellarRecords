import React from 'react';
import './Notf404.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>

<div class="running-line">
  <div class="running_line_inner">
        <p className='stroka' >
        404 Not Found ⯌ <span className='stroke'>404 Not Found ⯌ </span>
        404 Not Found ⯌ <span className='stroke'>404 Not Found ⯌ </span>
        404 Not Found ⯌ <span className='stroke'>404 Not Found ⯌ </span>
        </p>                                   
  </div>
  <div class="running_line_inner">
        <p className='stroka' >
        404 Not Found ⯌ <span className='stroke'>404 Not Found ⯌ </span>
        404 Not Found ⯌ <span className='stroke'>404 Not Found ⯌ </span>
        404 Not Found ⯌ <span className='stroke'>404 Not Found ⯌ </span>
        </p>                         
  </div>
  <div class="running_line_inner">
        <p className='stroka' >
        404 Not Found ⯌ <span className='stroke'>404 Not Found ⯌ </span>
        404 Not Found ⯌ <span className='stroke'>404 Not Found ⯌ </span>
        404 Not Found ⯌ <span className='stroke'>404 Not Found ⯌ </span>
        </p>                              
</div>
</div>



      <div className="message">
      <div className="message-background"></div>
        <p className="message-p">Упс! Вы перешли на несуществующую страницу сайта<span className='star1'>⯌</span><span className='star2'>⯌</span></p>
        <span className='tomain'><Link to="/">На главную</Link></span>
        
      </div>

    </div>
  )
}
