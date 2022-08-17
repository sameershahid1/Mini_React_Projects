import React from 'react';
//Component
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent';


const Page = () => {
    return (
        <div className='Container'>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default Page;
