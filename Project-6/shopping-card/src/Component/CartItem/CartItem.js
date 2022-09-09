import React from 'react'
import { useDispatch } from 'react-redux'
import {cartActions} from '../../Redux/Slice/cart-slice';
import '../Cart/Cart.css'
const CartItem = ({name,quantity,total,price,id}) => {
const CartDispatch=useDispatch();

const AddHandler=()=>{
CartDispatch(cartActions.AddToCart({
     name,
     id,
     price    
  }));
};

const RemoveHandler=()=>{
  CartDispatch(cartActions.removeToCart(id));
};


return (
    <div className="cartItem">
      <h2>{name}</h2>
      <p>${price}</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className='cart-actions' onClick={RemoveHandler}>-</button>
      <button className='cart-actions' onClick={AddHandler}>+</button>
    </div>
  )
}

export default CartItem