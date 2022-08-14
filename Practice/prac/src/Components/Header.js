import React from "react";
import Image from './Assets/dragon.jpg'


const Header=()=>(
 <header className="Header-menu p1">
      <img src={Image} alt='Error'/>
      <ul className='nav-items'>
        <li className="m-1">Pricing</li>
        <li className="m-1">About</li>
        <li className="m-1">Contact</li>
      </ul>
  </header>
);

export default Header;
