import React from 'react';

function ProductItem({ product: { id, name, price, productImage } }) {
  return (
    <div className='product-grid'>
      <div className='product'>
        <img className='product-img' src={productImage} alt='productImage' />
      </div>
      <div className='product-info'>
        <p>{id}</p>
        <h2>{name}</h2>
        <p>{price}</p>
        <button className='preview'>Preview Item</button>
      </div>
    </div>
  );
}

export default ProductItem;
