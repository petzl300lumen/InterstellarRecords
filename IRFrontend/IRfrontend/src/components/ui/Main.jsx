import React, { useEffect, useState } from 'react';
import api from '../logic/api';
import './Main.css'
import plastinka from '/Plastinka.svg';

import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductCardContainer from './ProductCardContainer';


export default function Main() {


  const [products, setProducts] = useState([]);
  useEffect(function(){
      api.get("products")
      .then(res =>{
          console.log(res.data)
          setProducts(res.data)
      })
      .catch(err => {
          console.log(err.message)
      })
  }, [])


  return (
    <div>

      <div className='welcome'>
        <div className='welcome-left'>
          <p className="welcome-title">
            <span className='welcome-title-span'>*  Interstellar Records —</span> 
            издаем и распространяем дискографию звезд музыкальной индустрии</p>
            <div>
            <span className='tomainn'><Link to="/catalog">Смотреть каталог</Link></span>
            </div>
        </div>
        <div className='welcome-right'>
        <div className='plastinka-div'><img src={plastinka} alt="plastinka" /></div>
        </div>
      </div>

  <div class="running-line">
  <div class="running_line_inner">
        <p className='stroka' >
        Новые релизы ⯌ <span className='stroke'>Новые релизы ⯌ </span>
        Новые релизы ⯌ <span className='stroke'>Новые релизы ⯌ </span>
        Новые релизы ⯌ <span className='stroke'>Новые релизы ⯌ </span>
        </p>                                   
  </div>
  <div class="running_line_inner">
        <p className='stroka' >
        Новые релизы ⯌ <span className='stroke'>Новые релизы ⯌ </span>
        Новые релизы ⯌ <span className='stroke'>Новые релизы ⯌ </span>
        Новые релизы ⯌ <span className='stroke'>Новые релизы ⯌ </span>
        </p>                         
  </div>
  <div class="running_line_inner">
        <p className='stroka' >
        Новые релизы ⯌ <span className='stroke'>Новые релизы ⯌ </span>
        Новые релизы ⯌ <span className='stroke'>Новые релизы ⯌ </span>
        Новые релизы ⯌ <span className='stroke'>Новые релизы ⯌ </span>
        </p>                              
</div>
  </div>

  <div className="products">
        <ProductCardContainer products = {products} />
        </div>

      
    </div>
  )
}
