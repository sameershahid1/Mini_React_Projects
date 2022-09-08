import React from 'react';
import './Auth.css';
import { useDispatch } from 'react-redux';
import {authActions} from '../../Redux/Store/auth-slice'

const Auth = () => {
const authDispathc=useDispatch();
const handleSubmit=(e)=>{
e.preventDefault();
authDispathc(authActions.login());

}

return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} autoComplete>
          <label htmlFor="id">ID</label>
           <input type="text" name='id' id='id' required/>
           <label htmlFor="password">Password</label>
           <input type="password" name="password" required id="password" />
           <button className='login-btn' type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Auth