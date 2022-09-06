import React from 'react'
import {FaTwitter,FaFacebook,FaLinkedin} from 'react-icons/fa'
import { StyleSocialIcon } from '../Styles/SocialIcon.style'


const SocialIcon = () => {
  return (
    <div>
       <StyleSocialIcon>
         <li>
            <a href="https://twitter.com">  
               <FaTwitter/>
            </a>
         </li>
         <li>
            <a href="https://facebook.com">
               <FaFacebook/>
            </a>
        </li>
         <li>
            <a href="https://linkdin.com">                
               <FaLinkedin/>
            </a>
        </li>        
       </StyleSocialIcon>
    </div>
  )
}

export default SocialIcon