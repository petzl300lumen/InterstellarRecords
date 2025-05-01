import React, { useEffect, useState } from 'react';
import api from '../logic/api';
import './Main.css'
import plastinka from '/Plastinka.svg';
import { Link } from 'react-router-dom';
import ProductCardContainer from './ProductCardContainer';
import ArtistsContainer from './ArtistsContainer';
import Artists from './Artists';


export default function Main() {

// данные о продуктах с сервера
  const [products, setProducts] = useState([]);
  useEffect(function(){
      api.get("products")
      .then(res =>{
          // console.log(res.data)
          setProducts(res.data)
      })
      .catch(err => {
          console.log(err.message)
      })
  }, [])
  const [artists, setArtists] = useState([]);
useEffect(function(){
  api.get("artists")
  .then(res =>{
    console.log(res.data)
    setArtists(res.data)
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

  <div className="running-line">
  <div className="running_line_inner">
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

    <div className="artists">
      {/* <ArtistsContainer artists = {artists} /> */}
      <Artists artists = {artists} />
    </div>

    </div>
  )
}
