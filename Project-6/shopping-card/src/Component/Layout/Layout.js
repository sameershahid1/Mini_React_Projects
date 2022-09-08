import React from 'react';
import Header from '../Header/Header';
import  Products from "../Products/Products";
import './Layout.css';

const Layout = () => {
const total=100;
  return (
    <>
      <div className="layout">
         <Header/>
         <Products/>
        <div className='total-price'>
          <h3>Total: ${total}</h3>
          <button className='orderBtn'>Place Order</button>
        </div>{" "}
      </div>
    </>
  )
}

export default Layout