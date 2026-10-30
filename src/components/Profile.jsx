import React, { useContext } from 'react'
import UserContext from '../context/Usercontext'

export const Profile = () => {
  const {user} = useContext(UserContext)
  if(!user) return <h3>No data</h3>
  return (
    <>
    <h3>Profile</h3>
    <p>Username:{user.username}</p>
    <p>Password:{user.password}</p>
    </> 
  )
}
