import React from 'react'
import Auth from './Component/Auth/Auth'
import Layout from './Component/Layout/Layout'
import { useSelector } from 'react-redux'

const App = () => {
const isLogedIn=useSelector(state=>state.auth.isLogedIn)
console.log(isLogedIn);
return (
    <div className="App">
       {!(isLogedIn)&&<Auth/>}
       {isLogedIn&&<Layout/>}
    </div>
  )
}

export default App