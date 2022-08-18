import React from 'react'
import { useState } from 'react';

import Jokes_List from './Jokes_List';
import Sign_in from './Sign_in'

const Data=[
     {Topic:"Happy Independent day Jokes",
      Content:"Once Upon a time one day Mr.Sameer said to some kids, \"children go back to sleep or else Atif Mahde will come to your Dreams HOOHOHOHOHOHO, Just like he came in my 100-Legs(Zohaib) friend Dreams\". The kids did not listen to Mr.Sameer and after that Atif Mehde realy did came to their Dreams and said, \"Astaghfirullah Astaghfirullah Astaghfirullahhhhhhhhhhhhhhh\". After that the kids where not able to sleep for at least 10-days, and in that day they learn they should delete the heap memory properly and does not forget about dangling pointer, other wise Atif Mehde will come.So kids in this story we have learn that we should try our best to avoid memory leakage and dangling pointer."
     },
     {Topic:"Zohaib Day",
      Content:"Once Upon a time one day Mr.Sameer said to some kids, \"children go back to sleep or else Atif Mahde will come to your Dreams HOOHOHOHOHOHO, Just like he came in my 100-Legs(Zohaib) friend Dreams\". The kids did not listen to Mr.Sameer and after that Atif Mehde realy did came to their Dreams and said, \"Astaghfirullah Astaghfirullah Astaghfirullahhhhhhhhhhhhhhh\". After that the kids where not able to sleep for at least 10-days, and in that day they learn they should delete the heap memory properly and does not forget about dangling pointer, other wise Atif Mehde will come.So kids in this story we have learn that we should try our best to avoid memory leakage and dangling pointer."
     }     
];

//Next action function
const MainContent=()=>{
  const [count,setCount]=useState(0);
  const Next=()=>{
      if(count<Data.length-1)
      {
         setCount(count+1)
      }
   };

//Previous action function
const Pre=()=>{
  if(count>0)
  {
    setCount(count-1)
  }
 };  
return (
   <main>
      <Sign_in/>
   </main>
 );
};

export default MainContent


//        <Jokes_List data={Data[count]} next={Next} pre={Pre}/>
