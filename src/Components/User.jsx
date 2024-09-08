import React from 'react'
import { Link } from 'react-router-dom'

function User() {
  
  return (
    <div>
    <div className=' w-1/2 mx-auto mt-5 flex flex-col'>
      <h1 className='text-6xl'>Users</h1>
      <Link className='p-3 bg-rose-100 w-1/3 mt-2 hover:bg-rose-300 text-xl' to="/User/Chay" >Chay</Link>
      <Link className='p-3 bg-rose-100 w-1/3 mt-2 hover:bg-rose-300 text-xl' to="/User/Shravya" >Shravya</Link>
      <Link className='p-3 bg-rose-100 w-1/3 mt-2 hover:bg-rose-300 text-xl' to="/User/Rajini" >Rajini</Link>
    </div>
  </div>
  )
}

export default User