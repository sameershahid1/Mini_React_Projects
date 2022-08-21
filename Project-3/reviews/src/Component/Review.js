import React,{useState} from 'react'
import people from './data'
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'

const Review=()=> {
const [Index,setIndex]=useState(0);
const {name,job,image,text}=people[Index];
return (
    <article className='reivew'>
      <div className="img-container">
         <img src={image} alt={name} className='person-img'/>
         <span className='quote-icon'>
         <FaQuoteRight/>
         </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="button-container">
         <button onClick={ ()=>{ if(Index>0)setIndex(Index+1) } } className="pre-btn"><FaChevronLeft/></button>

         <button onClick={ ()=>{ if(Index<people.length()-1)setIndex(Index-1) } } className="next-btn"><FaChevronRight/></button>

         <button className="random-btn">suprise me</button>
      </div>
    </article>
  );
};

export default Review