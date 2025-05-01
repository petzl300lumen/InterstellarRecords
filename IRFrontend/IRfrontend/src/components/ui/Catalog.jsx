import React, { useEffect, useState } from 'react';
import CatalogContainer from './CatalogContainer';
import api from '../logic/api';
import './CatalogContainer.css';


export default function Catalog() {
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
  return (
    <div>

    <CatalogContainer products={products} />

    </div>
  )
}
