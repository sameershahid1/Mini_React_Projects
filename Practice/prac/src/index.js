import { wait } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ReactDOM from 'react-dom/client';

//CSS
import './index.css';

//Js
import {Books} from './books'
import Book from './Book'

function BookList(){
  return (
   <section className='booklist'>
    {Books.map((x)=>{return <Book key={x.id} book={x}/>})}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList/>
  </React.StrictMode>
);



