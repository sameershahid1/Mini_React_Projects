import React from 'react'
import './CSS/Jokes_List.css'

function Jokes_List({data,next,pre}) {
  const topic=data.Topic;
  const content=data.Content;
  return (
<div className='Main p1'>
     <div className='Heading c-1'>
        <h1>{topic}</h1>
     </div>
     <ol className='points c-1'>
        <li className='item'>{content}</li>
     </ol>
     <div className='btn-outer'>
       <button className='btn' onClick={pre}>Prev</button>
       <button className='btn' onClick={next}>Next</button>
     </div>
</div>
  )
}

export default Jokes_List