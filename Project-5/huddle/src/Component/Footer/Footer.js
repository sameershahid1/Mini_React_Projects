import React from 'react'
import Logo from '../../Assets/Images/logo_white.svg';

//Importing Comonent
import SocialIcon from '../SocialIcon/SocialIcon';

//Importing Style Component
import {Container} from '../Styles/Container';
import {Flex} from '../Styles/Flex.style';
import { StyleFooter } from '../Styles/Footer.style';


const Footer = () => {
  return (
    <StyleFooter>
        <Container>
            <img src={Logo} alt="Footer Logo" />
            <Flex>
                <ul>
                    <li>Loren ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna 
                        aliqua    
                    </li>
                    <li>+1-543-123-4567</li>
                    <li>example@huddle.com</li>
                </ul>
                <ul>
                    <li>About us</li>
                    <li>What we Do</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>

             {/*Social Icons*/}
             <SocialIcon/>
            </Flex>
            <p>&copy; 2021 Huddle. All rights reserved</p>
        </Container>
</StyleFooter>
  )
}

export default Footer