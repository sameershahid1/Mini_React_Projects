import React from 'react'
import './Cart.css';

const Cart = () => {
const Quantity=5;
  return (
    <div className='cartIcon'>
      <h3>Cart: {Quantity} Items</h3>
    </div>
  )
}

export default Cart