import React,{useState} from 'react'

function Sign_in() {
  const [Name,setName]=useState("");
  const [Password,setPassword]=useState("");
  const [Email,setEmail]=useState("");

  return (
    <div className='Form'>
        <form className='Form-Container' autoComplete=''>
            {/*Name*/}
            <div>
            <label>Full-Name</label>
            <input type={"text"}  placeholder={"Ente Name"} onChange={(e)=>{setName(e.target.value)}}/><br/>
            </div>

            {/*Password*/}   
            <div>
            <label>Password</label>
            <input type={"password"} placeholder={"Ente Password"} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            </div>

            {/*Email*/}
            <div>
               <label>Email</label>
               <input type={"email"} placeholder={"Ente Email"} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            </div>

            {/*Button*/}   
            <div className='btn-container'>
               <button type={"submit"} onClick="">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Sign_in