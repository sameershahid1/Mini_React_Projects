import React from 'react'
import {useState} from 'react'


const Book=(props)=>{
  const [like, setlike] = useState(0)
  let {Title,Image,Author}=props.book;//Destructuring
  const ClickHandler=()=>{console.log("Fuck You")};
  return (
  <div className='book' onClick={ClickHandler}>
   <img src={Image} alt='Error'/>
   <h1>{Title}</h1>
   <h4>{Author}</h4>
   <button type='button' onClick={()=>setlike(like+1)}>Likes {like}</button>
  </div>
  );
}

export default Book