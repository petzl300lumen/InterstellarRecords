import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api, { BASE_URL } from '../../logic/api';
import GenreButton from '../buttons/GenreButton';

export default function ProductDetail() {
    const { slug } = useParams();
    const [product, setProduct] = useState({});

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


  return (
    <div>
        <ul>
            <li>{product.title}</li>
            <li>{product.genre}</li>
            <li>{<GenreButton genre_prop={product.genre} />}</li>
            <li>{product.category}</li>
            <li>{product.descr}</li>
            <li>{product.price}</li>
            <li><img src={`${BASE_URL}${product.image}`} alt="ProductImage" /></li>
        </ul>
        
        
        
        
        
    </div>
  )
}
