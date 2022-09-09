import React from 'react';
import Cart from '../Cart/Cart';
import './Header.css';
import { useDispatch} from 'react-redux';
import {authActions} from '../../Redux/Slice/auth-slice';

const Header = () => {
const authDispatch=useDispatch();
const LogOut=()=>
{
  authDispatch(authActions.logout());
}
return (
    <header>
      <nav className='header-nav'>
        <ul className='header-ul'>
          <li>
            <h2 
             className='header-h2' 
             style={{fontFamily:"monospace",fontSize:"30px"}}>
              Redux Shopping App
             </h2>
          </li>
          <li><Cart/></li>
          <li><button onClick={LogOut} className='logout-btn' type='button'>Log-Out</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header