import React,{useState} from 'react'
import './CSS/Sign_in.css'

function Sign_in() {
  const [Name,setName]=useState("");
  const [Password,setPassword]=useState("");
  const [Email,setEmail]=useState("");

  return (
    <div className='Form'>
        <form className='Form-Container' autoComplete=''>
           <div className='Heading-1'>
            <h2>Sign-In</h2>
           </div>
            {/*Name*/}
            <div className='Name'>
            <input type={"text"} className={"input-1"} placeholder={"User-Name"} onChange={(e)=>{setName(e.target.value)}}/><br/>
            </div>

            {/*Password*/}   
            <div className='Password'>
            <input type={"password"} className={"input-1"} placeholder={"Password"} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            </div>

            {/*Email*/}
            <div className='Email'>
               <input type={"email"} className={"input-1 em"} placeholder={"Email"} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            </div>

            {/*Button*/}   
            <div className='btn-container'>
               <button type={"submit"} className={'btn'} onClick={()=>{console.log("Fuck you")}}>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Sign_in