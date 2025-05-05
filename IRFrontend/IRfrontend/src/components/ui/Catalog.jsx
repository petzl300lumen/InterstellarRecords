import React, { useEffect, useState } from 'react';
import CatalogContainer from './CatalogContainer';
import api from '../logic/api';
import './CatalogContainer.css';


export default function Catalog({setNumberCartItems}) {
  const [inCart, setInCart] = useState(false)
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

  // добавление товара в коризину с карточки 

function add_item(productId){
  const cart_code = localStorage.getItem("cart_code");
  const newItem = {cart_code: cart_code, product_id: productId}
    api.post("add_item/", newItem)
    .then(res => {
        // console.log(res.data)
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




    <CatalogContainer products={products} add_item={add_item} inCart={inCart}  />





    </div>
  )
}
