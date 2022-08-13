import React from 'react';
import ReactDOM from 'react-dom/client';

//CSS
import './index.css';

//Component
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent';



const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header/>
    <MainContent/>
    <Footer/>
  </React.StrictMode>
);




