import React from 'react';
//Component
import Header from './Header'
import Footer from './Footer'
import Main from './MainContent'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'



const Page = () => {
    return (
<Router>
        <div className='Holder'>
            <Header key={1}/>
            <Main key={2}/>
            <Footer key={3}/>
        </div>
</Router>
    );
}

export default Page;
