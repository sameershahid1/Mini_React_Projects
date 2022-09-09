import React from 'react'
import CartItem from './CartItem'
import '../Cart/Cart.css';
import { useSelector } from 'react-redux';

const CartItems = () => {
const CartItemlist=useSelector(((state)=>state.cart.itemList));
return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {
          CartItemlist.map((item)=>(
             <li key={item.id}>
               <CartItem 
                  id={item.id}
                  quantity={item.quantity} 
                  price={item.price} 
                  total={item.totalPrice} 
                  name={item.name}                  
               />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CartItems
