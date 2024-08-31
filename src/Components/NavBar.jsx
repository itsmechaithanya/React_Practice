import React from 'react'

function NavBar({data}) {
  return (
    <div className= 'flex py-4 px-8 w-screen justify-between items-center'>
        <div>
            <h1 className='text-orange-800'>Orange</h1>
        </div>
        <div className='flex justify-center items-center gap-3 bg-orange-400 py-2 px-5 rounded-full'>
            <h1>Favourites</h1>
            <h1>{data.filter(item=>item.added).length}</h1>
        </div>
    </div>
  )
}

export default NavBar