import React from 'react';
//Component
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent';


const Page = () => {
    return (
        <div className='Holder'>
            <Header key={1}/>
            <MainContent key={2}/>
            <Footer key={3}/>
        </div>
    );
}

export default Page;
