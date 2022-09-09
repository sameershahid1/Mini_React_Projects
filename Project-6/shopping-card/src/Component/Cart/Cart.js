import React from 'react'
import './Cart.css';
import { useSelector,useDispatch } from 'react-redux';
import {cartActions}  from '../../Redux/Slice/cart-slice';

const Cart = () => {
const Quantity=useSelector((state)=>state.cart.totalQuantity);
const CartDispatch=useDispatch();
const showCart=()=>{
  CartDispatch(cartActions.setShowCart());
}
return (
    <div className='cartIcon'>
      <h3 onClick={showCart}>Cart: {Quantity} Items</h3>
    </div>
  )
}

export default Cart