import React,{useState} from 'react'
import people from './data'
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'

const Review=()=> {
const [Index,setIndex]=useState(0);
const {name,job,image,text}=people[Index];
const Pre=()=>{ if(Index>0){setIndex(Index-1)} };
const Next=()=>{ if(Index<people.length-1){setIndex(Index+1)} };
const Random=()=>{ 
        let ran=Math.floor(Math.random()*people.length);
        if(ran==Index)
        {
          ran+=1;
          if(ran>=people.length){ran-=1;}
        }
        setIndex(ran)
      };

return (
    <article className='review'>
      {/*Image*/}
      <div className="img-container">
         <img src={image} alt={name} className='person-img'/>
         <span className='quote-icon'>
         <FaQuoteRight/>
         </span>
      </div>

      {/*Author Data*/}      
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      {/*Buttons*/}
      <div className="button-container">
            <div>
              <button onClick={Pre} className="pre-btn"><FaChevronLeft/></button>
              <button onClick={Next} className="next-btn"><FaChevronRight/></button>
            </div>
         <button onClick={Random} className="random-btn">suprise me</button>
      </div>

    </article>
  );
};

export default Review