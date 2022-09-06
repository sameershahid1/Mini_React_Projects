import React from 'react';

//Importing Component
import Header from './Component/Header/Header';
import Card from './Component/Card/Card';
import Footer from './Component/Footer/Footer';


//Impporting Style Component
import {Container} from './Component/Styles/Container';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Component/Styles/Global';


//Importing Data
import  content from './Assets/Data/Content';

//Importing Pics
import Pic1 from './Assets/Images/illustration-grow-together.svg'
import Pic2 from './Assets/Images/illustration-flowing-conversation.svg'
import Pic3 from './Assets/Images/illustration-your-users.svg'


const theme={
  colors:{
    header:'#ebfbff',
    body:'#fff',
    footer:'#003333'
  },
  mobile:'768px'
}


const App = () => {
content[0].image=Pic1;
content[1].image=Pic2;
content[2].image=Pic3;



  return (
<ThemeProvider theme={theme}>
  <>
<GlobalStyles />
     <Header/>
     <Container>
         {content.map((item,index)=>(
          <Card key={index} item={item} />
         ))}
     </Container>      
     <Footer/>
    </>
</ThemeProvider>
  )
}

export default App