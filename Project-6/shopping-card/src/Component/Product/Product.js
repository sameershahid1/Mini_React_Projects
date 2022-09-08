import React from 'react';
import './Product.css';

const Product = ({id,name,imgURL,price}) => {
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <button type='text'>Add to card</button>        
    </div>
  )
}

export default Product
