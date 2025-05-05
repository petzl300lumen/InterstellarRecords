import React from 'react';
import ProductCard from './ProductCard';
import './CatalogContainer.css';

export default function CatalogContainer({products, add_item, inCart}) {
  return (
    <div className='Catalog'>
        {products.map(product => <ProductCard key={product.id} product={product} add_item={add_item} inCart={inCart[product.id] || false}  />)}
    </div>
  )
}
