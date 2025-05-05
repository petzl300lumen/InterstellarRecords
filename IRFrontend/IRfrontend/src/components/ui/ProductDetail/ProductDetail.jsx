import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api, { BASE_URL } from '../../logic/api';
import GenreButton from '../buttons/GenreButton';
import CategotyButton from '../buttons/CategotyButton';
import './ProductDetail.css'

export default function ProductDetail({setNumberCartItems}) {
    const { slug } = useParams();
    const [product, setProduct] = useState({});
    const [inCart, setInCart] = useState(false)
    const cart_code = localStorage.getItem("cart_code");


    useEffect(function(){
        if(product.id){
            api.get(`product_in_cart?cart_code=${cart_code}&product_id=${product.id}`)
            .then(res => {
                // console.log(res.data)
                setInCart(res.data.product_in_cart)
            })
            .catch( err => {
                console.log(err.message)
            })
        }
    }, [cart_code, product.id])


    const newItem = {cart_code: cart_code, product_id: product.id}
    function add_item(){
        api.post("add_item/", newItem)
        .then(res => {
            console.log(res.data)
            setInCart(true)
            setNumberCartItems(curr => curr + 1 )
        })
        .catch(err => {
            console.log(err.message)
        } )
    }

    useEffect(function(){
        api.get(`product_detail/${slug}`)
        .then(res =>{
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err => {
            console.log(err.message) 
        })
        
    }, [])


    useEffect(() => {
        // Прокрутка страницы вверх при монтировании компонента
        window.scrollTo(0, 0);
      }, [])

  return (
    <div className='ProductDetail'>

        <div className='left-pd'><img src={`${BASE_URL}${product.image}`} alt="ProductDetailImage" className='ProductDetailImage' /></div>
        <div className='right-pd'>
            <div className="btns-g-c">
                {<GenreButton genre_prop={{genre_name: product.genre}} />}
                {<CategotyButton category_prop={{category_name: product.category}} />}
            </div>
            <div className="title-h2">
                <h2 className='title-h2-h2'>{product.title}</h2>
            </div>
            <div className="descr-p">
                <p className='descr-p-p'>{product.descr}</p>
            </div>
            <div className="line"></div>
            <div className="price-p">
                <p className='price-p-p'>{product.price} ₽</p>
            </div>
            <button className='btn-cart' onClick={add_item} disabled={inCart}>{inCart ? "Добавлено в корзину" : "В коризну"}</button> 

        </div>
        
        
    </div>
  )
}
