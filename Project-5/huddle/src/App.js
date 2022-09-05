import React from 'react';
import Header from './Component/Header/Header';
import {Container} from './Component/Styles/Container';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Component/Styles/Global';


const theme={
  colors:{
    header:'#ebfbff',
    body:'#fff',
    footer:'#003333'
  }
}


const App = () => {
  return (
<ThemeProvider theme={theme}>
  <>
<GlobalStyles />
     <Header/>
     <Container>
         <h1>Hello world</h1>
     </Container>      
    </>
</ThemeProvider>
  )
}

export default App