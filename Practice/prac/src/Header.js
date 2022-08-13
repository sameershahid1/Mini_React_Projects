import React from "react";
import Image from './dragon.jpg'

const Header=()=>(
  <header>
    <nav>
      <img src={Image} alt='Error'/>
      <ul className='nav-items'>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
);

export default Header;
