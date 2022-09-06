import React from 'react'

//Importing Styles Component
import {StyledHeader,Nav,Logo} from '../Styles/header.style';
import { Container } from '../Styles/Container';
import { Image } from '../Styles/header.style';
import {Button} from '../Styles/Button.style';
import {Flex} from '../Styles/Flex.style';

//Importing Images
import logo from '../../Assets/Images/logo.svg';
import Illustrion from '../../Assets/Images/illustration-mockups.svg';




const Header = () => {
  return (
      <StyledHeader>
        <Container>

          <Nav>
             <Logo src={logo} alt="Logo" />
             <Button>Try Free</Button>
          </Nav>
          <Flex>
           <div>
              <h1>Build The Commounity Your Fans Will Love</h1>
              <p>Huddle re-imagines the way we build communities. You
                 Have a Voice, but so does your audience. Create connections
                 with your users as you engage in genuine discussion.
              </p>

              <Button bg='#ff0099' color='#fff'>
                Get Started For Free
              </Button>
           </div>

            <Image src={Illustrion} alt='Image' />
          </Flex>
        </Container>
      </StyledHeader>
  )
}

export default Header