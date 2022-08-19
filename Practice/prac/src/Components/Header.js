import React from "react";
import { Link } from "react-router-dom";
import Image from './Assets/dragon.jpg'


const Header=()=>(
 <header className="Header-outer">
     <div className="Header-menu p1">
      <img src={Image} alt='Error'/>
      <ul className='nav-items'>
        <li className="m-1"><Link to="/" className="lin">Home</Link></li>
        {/* <li className="m-1"><Link to={""}>About</Link></li> */}
        <li className="m-1"><Link to="/sign-in" className="lin">Sign-in</Link></li>
        {/* <li className="m-1"><Link>Log-in</Link></li> */}
      </ul>
      </div>
  </header>
);

export default Header;
