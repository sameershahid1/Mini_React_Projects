import React from 'react'
import { useDispatch } from 'react-redux'
import '../Cart/Cart.css'


const CartItem = () => {
  return (
    <div className="cartItem">
      <h2></h2>
      <p></p>
      <p></p>
      <article></article>
      <button className='cart-actions'>-</button>
      <button className='cart-actions'>+</button>
    </div>
  )
}

export default CartItem