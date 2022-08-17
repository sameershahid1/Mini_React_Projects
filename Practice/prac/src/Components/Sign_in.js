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
            <label>Full-Name</label>
            <input type={"text"} className={"input-1"} placeholder={"Ente Name"} onChange={(e)=>{setName(e.target.value)}}/><br/>
            </div>

            {/*Password*/}   
            <div className='Password'>
            <label>Password</label>
            <input type={"password"} className={"input-1"} placeholder={"Ente Password"} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            </div>

            {/*Email*/}
            <div className='Email'>
               <label>Email</label>
               <input type={"email"} className={"input-1 em"} placeholder={"Ente Email"} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            </div>

            {/*Button*/}   
            <div className='btn-container'>
               <button type={"submit"} className={'btn'} onClick="">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Sign_in