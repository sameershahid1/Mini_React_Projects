import { wait } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



function BookList(){
  let Blist=[{Title:"Python Crash Course",Image:"https://m.media-amazon.com/images/I/71sL0Qpd+YL._AC_UY218_.jpg",Author:"Eric Matthes"},
             {Title:"The Self-Taught Programmer",Image:"https://m.media-amazon.com/images/I/51+Z8QVq+WL._AC_UY218_.jpg",Author:"Cory Althoff"}  
             ]
  return (
   <section className='booklist'>
    {Blist.map((x)=>{return <Book image={x.Image} title={x.Title} author={x.Author}/>})}
    </section>
  );
}


const Book=(props)=>{
  return (
  <div className='book'>
   <img src={props.image} alt='Error'/>
   <h1>{props.title}</h1>
   <h4>{props.author}</h4>
  </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList/>
  </React.StrictMode>
);



