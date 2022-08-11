import { wait } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function BookList(){
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}


const Book=()=>{
  return (
  <div className='book'>
    <Image/>
    <Title/>
    <Author/>
  </div>
  );
}

const Image=()=><img src='https://m.media-amazon.com/images/I/71sL0Qpd+YL._AC_UY218_.jpg' alt='Error'/>;
const Title=()=><h1>Python Crash Course</h1>;
const Author=()=><h4>Eric Matthes</h4>;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList/>
  </React.StrictMode>
);



