import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product: { id, name, price, productImage } }) {
  return (
    <div className='product-grid'>
      <div className='product'>
        <h2>{name}</h2>
      </div>
      <div className='product-info'>
        <p id='id'>id: {id}</p>
        <p id='price'>Price: ${price}</p>
        <Link to={`/${id}`} className='preview'>
          Preview Item
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
