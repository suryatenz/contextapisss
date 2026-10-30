import React, { useState, useContext } from 'react'
import UserContext from '../context/Usercontext'

export const Login = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const {setUser} = useContext(UserContext)
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    setUser({username,password})
  }
  return (
    <>
    <div className="">
      <h3>Login</h3>
      <input type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)} value={username}/>
      <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <button onClick={handleSubmit}>Login</button>
    </div>
    </>
  )
}
