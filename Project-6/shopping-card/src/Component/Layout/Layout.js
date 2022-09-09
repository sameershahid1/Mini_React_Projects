import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import  Products from "../Products/Products";
import CardItems  from '../CartItem/CartItems';
import './Layout.css';

const Layout = () => {
const Total=useSelector((state)=>state.cart.itemList)
const showCart=useSelector((state)=>state.cart.showCart)
let total=0;
Total.map((item)=>{total+=item.totalPrice})

return (
    <>
      <div className="layout">
         <Header/>
         <Products/>
         {showCart&&<CardItems/>}
        <div className='total-price'>
          <h3>Total: ${total}</h3>
          <button className='orderBtn'>Place Order</button>
        </div>{" "}
      </div>
    </>
  )
}

export default Layout