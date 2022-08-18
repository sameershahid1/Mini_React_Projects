import React from "react";
import Image from './Assets/dragon.jpg'


const Header=()=>(
 <header className="Header-outer">
     <div className="Header-menu p1">
      <img src={Image} alt='Error'/>
      <ul className='nav-items'>
        <li className="m-1">Home</li>
        <li className="m-1">About</li>
        <li className="m-1">Sign-in</li>
        <li className="m-1">Log-in</li>
      </ul>
      </div>
  </header>
);

export default Header;
