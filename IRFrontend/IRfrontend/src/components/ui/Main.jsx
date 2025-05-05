import React, { useEffect, useState } from 'react';
import api from '../logic/api';
import './Main.css'
import plastinka from '/Plastinka.svg';
import { Link } from 'react-router-dom';
import ProductCardContainer from './ProductCardContainer';
import ArtistsContainer from './ArtistsContainer';
import Artists from './Artists';
import Error from './Error';
import GenreButton from './buttons/GenreButton';
import CategotyButton from './buttons/CategotyButton';
import { randomValue } from '../logic/GenerateCartCode';


export default function Main({setNumberCartItems}) {

// данные о продуктах с сервера
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  useEffect(function(){
      api.get("products")
      .then(res =>{
          // console.log(res.data)
          setProducts(res.data)
      })
      .catch(err => {
          console.log(err.message)
          setError(err.message)
      })
  }, [])

  const [artists, setArtists] = useState([]);
useEffect(function(){
  api.get("artists")
  .then(res =>{
    // console.log(res.data)
    setArtists(res.data)
    setError("")
  })
  .catch(err => {
    console.log(err.message)
  })
}, [])

const [genres, setGenres] = useState([]);

useEffect(function(){
    api.get("genres")
    .then(res => {
        // console.log(res.data)
        setGenres(res.data)
    })
    .catch(err => {
        console.log(err.message)
    })
}, [])

const [categorys, setCategorys] = useState([]);

useEffect(function(){
    api.get("category")
    .then(res => {
        // console.log(res.data)
        setCategorys(res.data)
    })
    .catch(err => {
        console.log(err.message)
    })
}, [])


  useEffect(function(){
    if(localStorage.getItem("cart_code") === null){
      localStorage.setItem("cart_code", randomValue)
    }
  }, [])

  // добавление товара в коризину с карточки 
  const [inCart, setInCart] = useState(false)


  useEffect(() => {
    const cart_code = localStorage.getItem("cart_code");
    if (!cart_code || products.length === 0) return;

    products.forEach((product) => {
      api.get(`product_in_cart?cart_code=${cart_code}&product_id=${product.id}`)
        .then(res => {
          setInCart((prevState) => ({
            ...prevState,
            [product.id]: res.data.product_in_cart,
          }));
        })
        .catch(err => {
          console.log(err.message);
        });
    });
  }, [products]);



function add_item(productId){
  const cart_code = localStorage.getItem("cart_code");
  const newItem = {cart_code: cart_code, product_id: productId}
    api.post("add_item/", newItem)
    .then(res => {
        console.log(res.data)
        setInCart((prevState) => ({
          ...prevState,
          [productId]: true, 
        }));
        setNumberCartItems(curr => curr + 1 )
    })
    .catch(err => {
        console.log(err.message)
    } )
}



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




        <ProductCardContainer products = {products} add_item={add_item} inCart={inCart} />




    </div>
    {error && <Error error = {error} /> }
    <div className="artists">
      {/* <ArtistsContainer artists = {artists} /> */}
      <Artists artists = {artists} />
    </div>


    {/* Получение кнопок жанров 
    { genres.map((genre) => (
    <GenreButton key={genre.id} genre_prop={genre}/>
    ))}
    Получение кнопок категории
    { categorys.map((category) => (
      <CategotyButton key={category.id} category_prop={category} />
    ))} */}
    </div>
  )
}
