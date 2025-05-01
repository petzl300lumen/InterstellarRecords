import React from 'react';
import ProductCard from './ProductCard';
import './CatalogContainer.css';

export default function CatalogContainer({products}) {
  return (
    <div className='Catalog'>
        {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}
